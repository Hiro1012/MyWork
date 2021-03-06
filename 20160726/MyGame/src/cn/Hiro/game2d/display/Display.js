/**
 * Created by Hiro on 16/7/26.
 */

import G2DEventDispatcher from "cn/Hiro/game2d/events/G2DEventDispatcher";
import G2DMouseEvent from "cn/Hiro/game2d/events/G2DMouseEvent";

class Display extends G2DEventDispatcher {

    constructor() {
        super();

        this.x = 0;
        this.y = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotation = 0;

        this._enabled = true;
        this._parent = null;
    }

    /**
     * @param {CanvasRenderingContext2D} context2d
     * @protected
     * @abstract
     */
    onDraw(context2d) {
    }

    /**
     * @param {CanvasRenderingContext2D} context2d
     */
    internal_draw(context2d) {
        context2d.save();
        context2d.translate(this.x, this.y);
        context2d.scale(this.scaleX, this.scaleY);
        context2d.rotate(this.rotation);

        this.onDraw(context2d);
        context2d.restore();
    }

    hitTestPoint(globalX, globalY) {
        return false;
    }

    getGlobalX() {
        var parent = this.getParent();
        if (parent) {
            return parent.getGlobalX() + this.x;
        } else {
            return 0;
        }
    }

    getGlobalY() {
        var parent = this.getParent();
        if (parent) {
            return parent.getGlobalY() + this.y;
        } else {
            return 0;
        }
    }

    internal_onClick(nativeEvent){
        if(this.isEnabled()&&this.hitTestPoint(nativeEvent.layerX,nativeEvent.layerY)){
            let e =new G2DMouseEvent(G2DMouseEvent.CLICK);
            e.internal_setCurrentTarget(this);
            this.internal_dispatchEvent(e);
        }
    }

    internal_dispatchEvent(e){
        e.internal_setTarget(this);
        this.disoatchEvent(e);

        if(this.getParent()){
            this.getParent().internal_dispatchEvent(e);
        }
    }

    setEnabled(value) {
        this._enabled = value;
    }

    isEnabled() {
        return this._enabled;
    }

    internal_setParent(value) {
        this._parent = value;
    }

    getParent() {
        return this._parent;
    }
}

export default Display;