import Player from "../src/Player";

describe("testing Player class", () => {
  const player = new Player("Ajay");
  it("should return player name of a Player", () => {
    expect(player.getName()).toBe("Ajay");
  });
});
