import Board from "../src/Board";
import Dice from "../src/Dice";
import SnakeAndLadderGame from "../src/SnakeAndLadderGame";
import Player from "../src/Player";

describe("testing game with only snake", () => {
  class TestDice extends Dice {
    private diceTotal = 0;
    public roll() {
      if (this.diceTotal === 18) {
        return 2;
      }
      this.diceTotal += 6;
      return 6;
    }
  }
  const testDice = new TestDice();
  const player = new Player("Ajay");
  const board = new Board({
    numberOfTiles: 100,
    snakes: [{ head: 20, tail: 10 }],
  });
  const game = new SnakeAndLadderGame([player], board, testDice);
  game.makeMove(player);
  game.makeMove(player);
  game.makeMove(player);

  it("game contains snake", () => {
    expect(game.getPlayerPosition(player)).toEqual(18);
    game.makeMove(player);
    expect(game.getPlayerPosition(player)).toEqual(10);
  });
});

describe("testing game with only ladder", () => {
  class TestDice extends Dice {
    private diceTotal = 0;
    public roll() {
      if (this.diceTotal === 18) {
        return 2;
      }
      this.diceTotal += 6;
      return 6;
    }
  }
  const testDice = new TestDice();
  const player = new Player("Ajay");
  const board = new Board({
    numberOfTiles: 100,
    ladders: [{ bottom: 20, top: 67 }],
  });
  const game = new SnakeAndLadderGame([player], board, testDice);
  game.makeMove(player);
  game.makeMove(player);
  game.makeMove(player);

  it("game contains ladder", () => {
    expect(game.getPlayerPosition(player)).toEqual(18);
    game.makeMove(player);
    expect(game.getPlayerPosition(player)).toEqual(67);
  });
});
