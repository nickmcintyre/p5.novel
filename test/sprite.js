describe('Sprite', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () {});
  });

  afterEach(function () {
    pInst.remove();
  });

  describe('createSprite()', function () {
    it('Should return a Sprite object', function () {
      const sprite = pInst.createSprite();
      expect(sprite).to.have.keys(["pInst", "x", "y", "_size", "images", "currentImage"]);
    });
  });
});
