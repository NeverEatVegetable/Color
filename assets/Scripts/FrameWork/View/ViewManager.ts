import { _decorator, Component, find, Node, Canvas, resources, instantiate, Prefab } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 界面管理器
 * 可通过事件机制，在界面中发送消息，通知界面管理器关闭或打开界面
 * 也可以获取该组件，直接调用closeView和openView方法
 * @class ViewManager
 * @extends Component
 * @field {Map<string, Node>} views - 存储所有打开的界面
 * @method start - 初始化界面管理器：监听关闭界面和打开界面的全局消息
 * @method closeView - GlobalNotify.CloseView消息的处理器：关闭界面
 * @method openView - GlobalNotify.OpenView消息的处理器：打开界面
 * @method clear - 清除所有界面
 */
@ccclass('ViewManager')
export class ViewManager extends Component {
    private views: Map<string, Node>;
    start() {
        console.log("ViewManager start");
        this.node.name = "Canvas"
        this.views = new Map<string, Node>();
        NotifyManager.instance.addListener(GlobalNotify.CloseView, this.closeView.bind(this));
        NotifyManager.instance.addListener(GlobalNotify.OpenView, this.openView.bind(this));
    }

    /**
     * 关闭界面
     * @param viewName 要关闭的界面名称
     */
    public closeView(viewName: string) {
        // TODO: close view
        var viewNode = this.views.get(viewName)

        if (viewNode) {
            this.node.removeChild(viewNode)
            this.views.delete(viewName)
            console.log(`关闭界面 ${viewName} 成功！`);
        }else{
            console.warn(`关闭界面 ${viewName} 失败: 未找到该视图`)
        }

        if(this.views.size == 0){
            console.log("没有活动的界面了，打开默认界面")
            this.openView("roomjoinpopview")
        }
    }
    /**
     * 打开界面
     * @param openViewName 要打开的界面名称
     * @param closeViewName 【可选】要关闭的界面名称，一般传入发送消息的界面Node.name
     */
    public openView(openViewName: string, closeViewName?: string) {
        // TODO: open view
        resources.load(`Prefabs/views/${openViewName}`, Prefab, (err, prefab) => {
            if (err) {
                console.error(`加载 ${openViewName}Prefab 失败: `, err)
                return
            }
            const newNode = instantiate(prefab)
            this.node.addChild(newNode)
            newNode.setPosition(0, 0, 0)
            this.views.set(openViewName, newNode)
            if (closeViewName) {
                this.closeView(closeViewName)
            }
        })
    }

    public clearAllView(){
        this.views.forEach((value, key) => {
            this.closeView(key)
        })
    }
}