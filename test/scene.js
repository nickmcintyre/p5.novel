describe('Scene', function () {
  let pInst;

  beforeEach(function () {
    pInst = new p5(function () {});
  });

  afterEach(function () {
    pInst.remove();
  });

  describe('createManager()', function () {
    it('Should return a SceneManager object', function () {
      const mgr = pInst.createManager();
      expect(mgr).to.have.keys(['pInst', 'scenes', 'scene']);
    });
  });
});
