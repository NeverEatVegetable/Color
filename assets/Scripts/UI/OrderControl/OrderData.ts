import { _decorator, Component, Node } from 'cc';
import { ColorManager } from '../../Utilites/ColorMix/ColorManager';
import { MyColor } from '../../Utilites/ColorMix/MyColor';
const { ccclass, property } = _decorator;

/** 订单数据*/
@ccclass('OrderData')
export class OrderData {
    /** 当前订单数据 */
    public nowColorOrder: Array<MyColor> = [];
    /** 当前订单数据的混合颜色个数*/
    public nowOrderMixNum: Array<number> = [];

    // #region 调用函数
    //public getOrderColor(): Array<MyColor> {
    //    return this.nowColorOrder;
    //}

    //public getOrderMixNum(): Array<number> {
    //    return this.nowOrderMixNum;
    //}

    /** 清除系统单笔订单数据 */
    public ClearSystemDate() {
        this.nowColorOrder = [];
        this.nowOrderMixNum = [];
    }

   /** 随机生成一组猫爪订单 */
   public RandomOrder()
   {
       this.ClearSystemDate();

       let bools:Array<boolean> = [];
       let boolNum:number;
       for (let i = 0; i < 4; i++)
       {
           bools = [(this.getRandomNumber(0,1)>0.5), (this.getRandomNumber(0,1)>0.5), (this.getRandomNumber(0,1)>0.5), (this.getRandomNumber(0,1)>0.5)];
           this.nowColorOrder.push(ColorManager._Instance.TryGetColor_ByMix(bools));

           boolNum = ColorManager._Instance.TryGetColorMixNum_ByMix(bools);
           if (boolNum <=0) {
               this.nowColorOrder.pop();
               i--;
           }
           else {
               this.nowOrderMixNum.push(boolNum);
           }
        //    console.log("xxxxx");
       }
    }
    
    // #endregion

    // #region 其他
    /**
     * 随机数函数
     * @param min
     * @param max
     * @returns
     */
    getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // #endregion
}
