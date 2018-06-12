import Base from './baseController';

/**
 * The following class is for testing purposes
 * the method 'insert' uses 'save' option of mongoose model to save an entry
 * */

export default class ChannelClass<T extends any> extends Base<T> {
    constructor(model: T) {
        super(model);
    }

    public insert(root: any, res: any) {
        const obj = new this.model({
            root,
        });
        obj.save((err: any, item: any) => {
            if (err) {
                return console.error(err);
            }
            res.status(200).json(item);
        });
    }

    public getLatest = (iotaService: any, res: any, req: any): any => {
        const numberOfTransactions = req.params.numberOfTransactions;
        const promiseAll: any[] = [];
        const finalArray: any[] = [];
        this.model.find({}).sort({_id: -1}).limit().exec((err: any, posts: any) => {
            posts = posts.slice(0, numberOfTransactions);
            const iota = iotaService.getIota();
            iotaService.initialiseMamState(iota);
            for (const post of posts) {
                promiseAll.push(
                    iotaService.getMam().fetch(post.root, 'public', null, (transaction: any) => {
                        finalArray.push(JSON.parse(iota.utils.fromTrytes(transaction)));
                    }),
                );
            }
            Promise.all(promiseAll).then(() => {
                res.status(200).json(finalArray);
            });
        });
    }
}
