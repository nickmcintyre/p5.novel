let sprite;

function preload() {
  sprite = createSprite();
  sprite.loadImage('ball.png');
}

function setup() {
  createCanvas(400, 400);
  background('dodgerblue');
  sprite.width = 50;
  sprite.height = 50;
}

function draw() {
  const amp = 100;
  const freq = 0.05;
  sprite.x = amp * cos(frameCount * freq) + 200;
  sprite.y = amp * sin(frameCount * freq) + 200;
}
