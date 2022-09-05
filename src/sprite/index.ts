/* eslint-disable no-underscore-dangle */
import Sprite from './sprite';

declare const p5: any;

p5.prototype.MANUAL = 'manual';

// eslint-disable-next-line consistent-return
p5.prototype.spriteMode = function _spriteMode(mode: string): void | string {
  if (mode === undefined) return this._spriteMode;
  if (mode === this.AUTO) {
    this._spriteMode = this.AUTO;
  } else if (mode === this.MANUAL) {
    this._spriteMode = this.MANUAL;
  }
};

p5.prototype.registerMethod('init', function _initSprites() {
  this._sprites = [];
  this._spriteMode = this.AUTO;
});

p5.prototype.createSprite = function _createSprite(
  x: number,
  y: number,
  width: number,
  height: number,
): Sprite {
  const sprite: Sprite = new Sprite(this, x, y, width, height);
  this._sprites.push(sprite);
  return sprite;
};

p5.prototype.registerMethod('post', function _renderSprites() {
  if (this._spriteMode)
  this._sprites.forEach((sprite: Sprite) => sprite.draw());
});
