import Board from "../src/Board";

describe("testing Board class with only tile number", () => {
  const board = new Board({ numberOfTiles: 10 });
  it("should return board of 10 tiles", () => {
    expect(board.getBoard()).toHaveLength(10);
  });
});

describe("testing Board having conflicting tile", () => {
  it("board throws error if tile has both snake and lader", () => {
    expect(() => {
      new Board({
        numberOfTiles: 10,
        snakes: [{ head: 21, tail: 10 }],
        ladders: [{ bottom: 21, top: 67 }],
      });
    }).toThrow();
  });
});

describe("testing Board movement", () => {
  const board = new Board({
    numberOfTiles: 10,
  });

  it("board moving 5 to 7", () => {
    expect(board.getDestination(5, 2)).toEqual(7);
  });
});

describe("testing Board winning tile", () => {
  const board = new Board({
    numberOfTiles: 100,
  });

  it("board winning title is 100", () => {
    expect(board.winningTile()).toEqual(100);
  });
});
