let mgr;

function setup() {
  createCanvas(400, 400);

  mgr = createManager();

  mgr.addScene('one', One);
  mgr.addScene('two', Two);
  mgr.addScene('three', Three);
  mgr.showScene('one');
}

function draw() {
  mgr.draw();
}

function mousePressed() {
  mgr.handleEvent('mousePressed');
}

function keyPressed() {
  switch (key) {
    case '1':
      mgr.showScene('one');
      break;
    case '2':
      mgr.showScene('two');
      break;
    case '3':
      mgr.showScene('three');
      break;
    default:
      break;
  }

  mgr.handleEvent('keyPressed');
}

class One {
  constructor() {
    this.message = `Press keys 1, 2, 3 to jump to a particular scene
    
    Press any other key to display it.`;
  }

  setup() {
    this.textX = 10;
    this.textY = 0;

    background('dodgerblue');
    textAlign(CENTER);

    noStroke();
    fill('white');
    text(this.message, width / 2, height / 2);
  }

  keyPressed() {
    text(key, this.textX, (this.textY += 10));
    if (this.textY > height) {
      this.textX += 20;
      this.textY = 0;
    }
  }
}

class Two {
  constructor() {
    this.colors = ['dodgerblue', 'darkorchid', 'deeppink', 'limegreen'];
  }

  setup() {
    resizeCanvas(400, 400);
    noStroke();
    fill('white');
    textAlign(CENTER, CENTER);
    this.numPresses = 0;
  }

  draw() {
    const i = this.numPresses % this.colors.length;
    background(this.colors[i]);
    text('Press the mouse to change the background color', width / 2, height / 2);
  }

  mousePressed() {
    this.numPresses += 1;
  }
}

function Three() {
  let x = 450;
  let y = 250;
  let r = 25;
  let xspeed = 1;
  let yspeed = 2;

  this.setup = function () {
    resizeCanvas(900, 500);
  }

  this.draw = function () {
    background('deeppink');

    update();
    checkEdges();
    render();
  }

  function update() {
    x += xspeed;
    y += yspeed;
  }

  function checkEdges() {
    if (x > width - r) {
      xspeed = -abs(xspeed);
    }
    if (x < r) {
      xspeed = abs(xspeed);
    }
    if (y > height - r) {
      yspeed = -abs(yspeed);
    }
    if (y < r) {
      yspeed = abs(yspeed);
    }
  }

  function render() {
    circle(x, y, 2 * r);
  }
}