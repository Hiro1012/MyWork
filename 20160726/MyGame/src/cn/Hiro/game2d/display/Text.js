/**
 * Created by Hiro on 16/7/26.
 */

import Display from "cn/Hiro/game2d/display/Display";

class Text extends Display {

    constructor(text, fontSize, fontFamily, color) {
        super();

        this._fontSize = fontSize || 10;
        this._fontFamily = fontFamily || "sans-serif";
        this._color = color || "000";
        this.generateFontString();

        this._text = text;
    }

    setText(text) {
        this._text = text;
    }

    getText() {
        return this._text;
    }

    generateFontString() {
        this._font = `${this._fontSize}px ${this._fontFamily}`;
    }

    getFont() {
        return this._font;
    }

    getFontSize() {
        return this._fontSize;
    }

    getFontFamily() {
        return this._fontFamily;
    }

    setFontSize(value) {
        this._fontSize = value;
        this.generateFontString();
    }

    getFontFamily(value) {
        this._fontFamily = value;
        this.generateFontString();
    }

    setColor(value) {
        this._color = value;
    }

    getColor() {
        return this._color;
    }

    onDraw(context2d) {
        context2d.font = this._font;
        context2d.fillStyle = this._color;
        context2d.fillText(this._text, 0, this._fontSize);
    }
}

export default Text;