import * as p5 from 'p5';
import SceneManager from './manager';

declare const window: any;

interface BaseScene {
  // system
  pInst: p5;
  manager?: SceneManager;
  // state
  setupExecuted?: boolean;
  enterExecuted?: boolean;
  // core
  setup?: Function;
  enter?: Function;
  draw?: Function;
  // events
  mouseClicked?: Function;
  mousePressed?: Function;
  mouseReleased?: Function;
  mouseMoved?: Function;
  mouseDragged?: Function;
  doubleClicked?: Function;
  mouseWheel?: Function;
  keyPressed?: Function;
  keyReleased?: Function;
  keyTyped?: Function;
  touchStarted?: Function;
  touchMoved?: Function;
  touchEnded?: Function;
  deviceMoved?: Function;
  deviceTurned?: Function;
  deviceShaken?: Function;
}

export class Scene implements BaseScene {
  pInst: p5;

  manager?: SceneManager;

  setupExecuted: boolean;

  enterExecuted: boolean;

  setup: Function;

  enter: Function;

  draw: Function;

  constructor(pInst: p5) {
    this.pInst = pInst instanceof p5 ? pInst : window;
    this.setupExecuted = false;
    this.enterExecuted = false;
  }
}

export interface SceneConstructor {
  // eslint-disable-next-line no-unused-vars
  new (pInst: p5): Scene;
}
