import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScrollerCell')
export class ScrollerCell extends Component {
    public cellNode: Node = null;
    public index: number;
    public row: number;
    public col: number;
    public data: any = null;
    public initCell(cellNode: Node, index: number, row: number, col: number, data: any) {
        this.cellNode = cellNode; this.index = index; this.row = row; this.col = col; this.data = data;
    }

    public updateCell(data: any, cell: ScrollerCell) {

    }

    public clearCell() {
        this.cellNode = null;
        this.index = -1;
        this.row = -1;
        this.col = -1;
        this.data = null;
    }
}


