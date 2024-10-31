// 事件管理器，有新需求再改吧
type Callback = (...args: any[]) => void;

class EventListener {
    id: string;
    callback: Callback;
    type?: string;

    constructor(id: string, callback: Callback, type?: string) {
        this.id = id;
        this.callback = callback;
        this.type = type;
    }
}

class NotifyManager {
    private listeners: Map<string, EventListener[]>;

    constructor() {
        this.listeners = new Map();
    }

    // 添加事件监听
    addListener(eventId: string, callback: Callback, type?: string): void {
        const listener = new EventListener(eventId, callback, type);
        if (!this.listeners.has(eventId)) {
            this.listeners.set(eventId, []);
        }
        this.listeners.get(eventId)!.push(listener);
    }

    // 移除事件监听
    removeListener(eventId: string): void {
        if (this.listeners.has(eventId)) {
            this.listeners.delete(eventId);
        }
    }

    // 派发事件
    dispatch(eventId: string, ...args: any[]): void {
        if (this.listeners.has(eventId)) {
            const eventListeners = this.listeners.get(eventId)!;
            console.log(`NotifyManager: Dispatching notify ${eventId}`);
            eventListeners.forEach(listener => {
                listener.callback(...args);
            });
        }
    }

    public static instance = new NotifyManager();
}
(window as any).NotifyManager = NotifyManager;
