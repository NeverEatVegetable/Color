interface IModel {
    needSend: boolean;
}

class BaseModel implements IModel {
    needSend: boolean;
    propMap: Map<string, any>;

    constructor() {
        this.propMap = new Map<string, any>();
        this.needSend = false;  //默认无需发送整个data的信息
    }

    setNeedSend(needSend: boolean) {
        this.needSend = needSend;
    }
    /**
     * 获取类所有属性的值，返回一个map。
     * 如果isRefresh为true或propMap为空，则刷新propMap
     * */
    getPropToMap(isRefresh: boolean = false): Map<string, any> {
        if (this.propMap.size == 0 || isRefresh) {
            const properties = Object.getOwnPropertyNames(this);
            for (const property of properties) {
                this.propMap.set(property, this[property]);
            }
        }

        return this.propMap;
    }
}
(window as any).BaseModel = BaseModel;
