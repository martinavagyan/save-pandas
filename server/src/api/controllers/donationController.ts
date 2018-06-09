import Base from './baseController';

export default class DonationClass<T extends any> extends Base<T> {
    constructor(model: T) {
        super(model);
    }
}
