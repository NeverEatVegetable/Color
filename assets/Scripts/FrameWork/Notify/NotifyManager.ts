/**
 * 回调数据类型，支持 任意 类型，建议是function
 */
type Callback = (...args: any[]) => void;

/**
 * 事件处理器
 * @param id 事件ID,仅支持数字和字符串,建议：全局事件添加到GlobalNotify中，局部事件用字符串
 * @param callback 回调函数
 * @param type 事件类型，可选，暂无用处
 */
class Eventhandler {
    id: number|string;
    callback: Callback;
    type?: string;

    constructor(id: number|string, callback: Callback, type?: string) {
        this.id = id;
        this.callback = callback;
        this.type = type;
    }
}

/**
 * 事件管理器
 * @param notifys 事件map<key:事件ID, value:事件处理器列表>
 * @function addListener 添加事件监听, 参数：事件ID，回调函数，事件类型（可选）
 * @function removeListener 移除事件监听, 参数：事件ID，回调函数（可选）
 * @function dispatch 派发事件, 参数：事件ID，回调参数（可选）
 */
class NotifyManager {
    private notifys: Map<number|string, Eventhandler[]>;


    private constructor() {
        this.notifys = new Map();
    }

    // 添加事件监听
    addListener(notifyId: number|string, callback: Callback, type?: string): void {
        const handler = new Eventhandler(notifyId, callback, type);
        if (!this.notifys.has(notifyId)) {
            this.notifys.set(notifyId, []);
        }
        this.notifys.get(notifyId)!.push(handler);
    }

    // 移除事件监听
    removeListener(notifyId: number|string, callback?: Callback): void {
        if (!this.notifys.has(notifyId)) {
            return; // 如果没有这个事件ID，直接返回
        }

        const notify = this.notifys.get(notifyId)!;

        if (callback) {
            // 如果提供了回调函数，删除指定的回调
            this.notifys.set(notifyId, notify.filter(handler => handler.callback !== callback));
        } else {
            // 如果没有提供回调，删除整个事件ID的所有回调
            this.notifys.delete(notifyId);
        }
    }

    // 派发事件
    dispatch(notifyId: number|string, ...args: any[]): void {
        if (this.notifys.has(notifyId)) {
            const notify = this.notifys.get(notifyId)!;
            console.log(`NotifyManager: Dispatching notify ${notifyId}`);
            notify.forEach(handler => {
                handler.callback(...args);
            });
        }
    }

    public static instance = new NotifyManager();
}
(window as any).NotifyManager = NotifyManager;

/*
使用示例：
    -- 注册事件监听
    NotifyManager.instance.addListener(notifyId,()=>console.log("这里放事件的回调函数,可以匿名函数，也可调用类中的方法：this.方法名"))

    -- 派发事件
    NotifyManager.instance.dispatch(notifyId)   // 派发事件，不传数据
    NotifyManager.instance.dispatch(notifyId, data1, data2,...)  // 派发事件，传递数据
    具体带数据派发事件的示例：
    NotifyManager.instance.addListener("带数据事件", (a, b) => { console.log(a, b) })//回调函数参数必须指定，数据与事件派发的数据参数顺序一致
    NotifyManager.instance.dispatch("带数据事件",1,2)   //触发事件，控制台打印：1 2
    NotifyManager.instance.removeListener("GameStart")

    -- 移除事件监听
    NotifyManager.instance.removeListener(notifyId) // 移除指定事件ID
    NotifyManager.instance.removeListener(notifyId,functionName)  // 移除指定事件ID的指定监听回调,无法移除匿名函数
 */