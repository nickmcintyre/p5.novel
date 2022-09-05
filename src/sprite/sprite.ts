/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import * as p5 from 'p5';

export default class Sprite {
  pInst: p5;

  position: p5.Vector;

  images: p5.Image[];

  currentImage: p5.Image;

  imageMode: string;

  x: number;

  y: number;

  width: number;

  diameter: number;

  height: number;

  _size: number;

  constructor(
    pInst: p5,
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
    this.pInst = pInst;
    this.x = x;
    this.y = y;
    if (height) {
      this.width = width;
      this.height = height;
    } else if (width) {
      this.diameter = width;
    }
    this._size = 50;
    this.images = [];
    this.currentImage = null;
  }

  loadImage(path: string) {
    return new Promise((resolve, reject) => {
      this.pInst.loadImage(
        path,
        (img: p5.Image) => {
          this.images.push(img);
          this.currentImage = img;
          resolve(img);
        },
        () => {
          let msg: string = '🌸 p5.js says: It looks like there was a problem loading your image. ';
          msg += `Try checking if the file path (${path}) is correct, `;
          msg += 'hosting the file online, or running a local server.';
          reject(Error(msg));
        },
      );
    });
  }

  draw(): void {
    this.pInst.push();
    this.pInst.translate(this.x, this.y);
    if (this.currentImage !== null) {
      this.pInst.imageMode(this.pInst.CENTER);
      this.pInst.image(this.currentImage, 0, 0, this.width, this.height);
    } else if (this.diameter) {
      const f = (item: any) => item !== undefined;
      const dims: number[] = [this.width, this.height, this.diameter].filter(f);
      const d: number = this.pInst.max(dims);
      this.pInst.circle(0, 0, d);
    } else if (this.height) {
      this.pInst.rectMode(this.pInst.CENTER);
      const w: number = this.width ? this.width : this._size;
      this.pInst.rect(0, 0, w, this.height);
    } else if (this.width) {
      this.pInst.rectMode(this.pInst.CENTER);
      const h: number = this.height ? this.height : this._size;
      this.pInst.rect(0, 0, this.width, h);
    } else {
      this.pInst.rectMode(this.pInst.CENTER);
      this.pInst.square(0, 0, this._size);
    }
    this.pInst.pop();
  }
}
