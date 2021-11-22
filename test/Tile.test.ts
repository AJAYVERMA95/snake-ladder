import Tile from "../src/Tile";

describe("testing Tile class", () => {
  const tile = new Tile(5, 6);
  it("should return tile number 5", () => {
    expect(tile.getNumber()).toEqual(5);
  });

  const ladderTile = new Tile(5, 6);
  ladderTile.addLadder(10);
  it("should check ladder added on tile 5", () => {
    expect(ladderTile.hasLadder()).toBeTruthy();
    expect(ladderTile.hasSnake()).toBeFalsy();
  });

  const snakeTile = new Tile(5, 6);
  snakeTile.addSnake(3);
  it("should check snake added on tile 5", () => {
    expect(snakeTile.hasLadder()).toBeFalsy();
    expect(snakeTile.hasSnake()).toBeTruthy();
  });
});
