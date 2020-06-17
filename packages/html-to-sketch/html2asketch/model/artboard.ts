import Base from './base';

class Artboard extends Base {

  _class: any;
  _x: any;
  _y: any;
  _width: any;
  _height: any;

  constructor({x, y, width, height, id}: any) {
    super({id});
    this._class = 'artboard';
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
  }

  toJSON() {
    const obj: any = super.toJSON();

    obj.frame = {
      _class: 'rect',
      constrainProportions: false,
      height: this._height,
      width: this._width,
      x: this._x,
      y: this._y,
    };

    obj.style = {
      _class: 'style',
      endDecorationType: 0,
      miterLimit: 10,
      startDecorationType: 0,
    };

    obj.horizontalRulerData = {
      _class: 'rulerData',
      base: 0,
      guides: [],
    };
    obj.verticalRulerData = {
      _class: 'rulerData',
      base: 0,
      guides: [],
    };

    obj.hasClickThrough = true;
    obj.includeInCloudUpload = true;

    return obj;
  }
}

export default Artboard;
