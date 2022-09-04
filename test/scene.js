describe('p5.novel', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () {});
  });

  afterEach(function () {
    pInst.remove();
  });

  describe('createManager()', function () {
    it('Should return a SceneManager object', function () {
      const m = pInst.createManager();
      expect(m).to.have.keys(['pInst', 'scenes', 'scene']);
    });
  });
});
