interface IData{
    value: any;
    needSend: boolean;
}
/**
 * 数据基类
 * @param {IData} IData 数据接口，每个数据都应该实现这个接口
 * @param {Data} Data 数据类，实现IData接口。
 * @param value 数据值
 * @param needSend 是否需要将数据发送到服务器
 */
class Data implements IData {
    value: any;
    needSend: boolean;

    setValue(value: any) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    setNeeSend(needSend: boolean) {
        this.needSend = needSend;
    }

    getNeedSend() {
        return this.needSend;
    }
}
(window as any).Data = Data;


/**
 * Model基类：
 * 凡是Model都应继承该类，并实现自己的属性。
 * @function getPropToMap 获取类所有需要发送的属性值，返回一个map。
 */
class BaseModel {
    /**
     * 获取类所有需要发送的属性值，返回一个map。
     * */
    getPropToMap(): Map<string, any> {
        const map = new Map<string, any>();
        const properties = Object.getOwnPropertyNames(this);
        for (const property of properties) {
            if (this[property].getNeedSend() == true)
                map.set(property, this[property]);
        }
        return map;
    }
}
(window as any).BaseModel = BaseModel;

// 使用示例：
// class TestModel extends BaseModel {
//     testData : Data = new Data();
// }
// var mo = new TestModel();
// mo.testData.setValue(1);
// mo.testData.setNeeSend(true);   // 改成false则不会被获取
// var moMp = mo.getPropToMap();
// moMp.forEach((value, key) => {
//     console.log(key + " : value = " + value.getValue() + ", needSend = " + value.getNeedSend());
// });