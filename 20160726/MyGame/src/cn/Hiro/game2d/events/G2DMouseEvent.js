/**
 * Created by Hiro on 16/7/31.
 */

import G2DEvent from "cn/Hiro/game2d/events/G2DEvent";

class G2DMouseEvent extends G2DEvent {
    constructor(type, data) {
        super(type, data);
    }
}

G2DMouseEvent.CLICK = "click";

export default G2DMouseEvent;