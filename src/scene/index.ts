import SceneManager from "./manager";

declare const p5: any;

p5.prototype.createManager = function _createManager() {
  return new SceneManager(this);
};
