// // 事件管理器，有新需求再改吧
// type Callback = (...args: any[]) => void;

// class Eventhandler {
//     id: string;
//     callback: Callback;
//     type?: string;

//     constructor(id: string, callback: Callback, type?: string) {
//         this.id = id;
//         this.callback = callback;
//         this.type = type;
//     }
// }

// class NotifyManager {
//     private handlers: Map<string, Eventhandler[]>;

//     constructor() {
//         this.handlers = new Map();
//     }

//     // 添加事件监听
//     addhandler(eventId: string, callback: Callback, type?: string): void {
//         const handler = new Eventhandler(eventId, callback, type);
//         if (!this.handlers.has(eventId)) {
//             this.handlers.set(eventId, []);
//         }
//         this.handlers.get(eventId)!.push(handler);
//     }

//     // 移除事件监听
//     removehandler(eventId: string): void {
//         if (this.handlers.has(eventId)) {
//             this.handlers.delete(eventId);
//         }
//     }

//     // 派发事件
//     dispatch(eventId: string, ...args: any[]): void {
//         if (this.handlers.has(eventId)) {
//             const eventhandlers = this.handlers.get(eventId)!;
//             console.log(`NotifyManager: Dispatching notify ${eventId}`);
//             eventhandlers.forEach(handler => {
//                 handler.callback(...args);
//             });
//         }
//     }

//     public static instance = new NotifyManager();
// }
// (window as any).NotifyManager = NotifyManager;

class EventManager {
    private events: { [key: string]: { listener: Function; holder: any }[] } = {};

    // 注册事件
    public on(event: string, listener: Function, holder: any): void {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        const existingListener = this.events[event].some(
            l => l.listener === listener && l.holder === holder
        );
        if (!existingListener) {
            this.events[event].push({ listener, holder });
        }
    }

    // 注销事件
    public off(event: string, listener: Function, holder: any): void {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(
            l => l.listener !== listener || l.holder !== holder
        );
    }

    // 触发事件
    public emit(event: string, ...args: any[]): void {
        if (!this.events[event]) return;

        this.events[event].forEach(({ listener, holder }) => {
            listener.apply(holder, args);
        });
    }

    // 清除某个事件的所有监听器
    public clear(event: string): void {
        if (this.events[event]) {
            delete this.events[event];
        }
    }

    // 清除所有事件
    public clearAll(): void {
        this.events = {};
    }

    public static instance = new EventManager();
}
