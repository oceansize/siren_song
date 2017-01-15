describe("Siren", function() {
  var siren;

  beforeEach(function() {
    siren = new Siren();
  });

  it("should be able to play a Song", function() {
    expect(siren.isSongPlaying).toEqual(true);
  });

});
