/**
 * Created by Hiro on 16/7/26.
 */

import Game2dApp from "cn/Hiro/game2d/app/Game2dApp";
import Rectangle from "cn/Hiro/game2d/display/Rectangle";
import Text from "cn/Hiro/game2d/display/Text";
import Container from "cn/Hiro/game2d/display/Container";
import G2DMouseEvent from  "cn/Hiro/game2d/events/G2DMouseEvent";

class Game extends Game2dApp {

    constructor() {
        super(400, 300);

        document.body.appendChild(this.getDom());

        this.testGlobalPosition();

        // >>>Simple Example

        // this._container = new Container();
        //
        // this._rect = new Rectangle(100, 100, "#0dd");
        // this._rect.y = 100;
        // this._rect.scaleX = 2;
        // this._container.addChild(this._rect);
        //
        // this._text = new Text("Hello World");
        // this._text.setColor("#dd0");
        // this._container.addChild(this._text);
        //
        // this.addChild(this._container);
        //
        // this._container.x = 100;
    }

    testGlobalPosition() {
        this._container = new Container();
        this._container.x = 10;
        this._container.y = 30;

        this._containerA = new Container();
        this._containerA.x = 10;
        this._rect = new Rectangle(100, 100, "#dd0");
        this._rect.x = 10;
        this._containerA.addChild(this._rect);

        this._container.addChild(this._containerA);
        this.addChild(this._container);

        console.log(this._rect.getGlobalX());

        this._rect.addEventListener(G2DMouseEvent.CLICK, function (event) {
            console.log(event);
        })
    }
}

new Game();