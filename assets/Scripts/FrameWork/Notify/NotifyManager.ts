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