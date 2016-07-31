/**
 * Created by Hiro on 16/7/31.
 */

class G2DEventDispatcher {

    constructor() {
        this._listeners = new Map();
    }

    addEventListener(type, func) {
        var listeners = this._listeners.get(type);
        if (!listeners) {
            listeners = [];
            this._listeners.set(type, listeners);
        }
        listeners.push(func);
    }

    removeEventListener(type, func) {
        var listeners = this._listeners.get(type);
        if (listeners) {
            if (func) {
                var index = listeners.indexOf(func);
                if (index != -1) {
                    listeners.splice(index, 1);
                } else {
                    listeners.length = 0;
                }
            }
        }
    }

    disoatchEvent(event) {
        var listeners = this._listeners.get(event.getType());
        if (listeners && listeners.length > 0) {
            for (let i = 0; i < listeners.length; i++) {
                listeners[i](event);
            }
        }
    }
}

export default G2DEventDispatcher;