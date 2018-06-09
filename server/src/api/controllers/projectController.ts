import Base from './baseController';

export default class ProjectClass<T extends any> extends Base<T> {
    constructor(model: T) {
        super(model);
    }
}
