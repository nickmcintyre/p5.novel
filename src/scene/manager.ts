// eslint-disable-next-line import/no-extraneous-dependencies
import * as p5 from 'p5';
import { Scene, SceneConstructor } from './scene';

declare const window: any;

export default class SceneManager {
  pInst: p5;

  scenes: Map<string, Scene>;

  scene: Scene;

  constructor(pInst: p5) {
    this.pInst = pInst instanceof p5 ? pInst : window;
    this.scenes = new Map();
    this.scene = null;
  }

  addScene(name: string, Constructor: SceneConstructor): Scene {
    const scene: Scene = new Constructor(this.pInst);
    scene.manager = this;
    this.scenes.set(name, scene);
    return scene;
  }

  showScene(name: string) {
    const scene: Scene = this.scenes.get(name);
    if (scene) {
      this.scene = scene;
      this.scene.setupExecuted = false;
    }
  }

  draw() {
    if (this.scene === null) return;

    if (typeof this.scene.setup === 'function' && !this.scene.setupExecuted) {
      this.scene.setup();
      this.scene.setupExecuted = true;
    }

    if (typeof this.scene.draw === 'function') {
      this.scene.draw();
    }
  }

  handleEvent(event: string) {
    if (this.scene === null) return;
    const fnEvent: Function = this.scene[event];
    if (fnEvent) fnEvent.call(this.scene);
  }
}
