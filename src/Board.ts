import Tile from "./Tile";

export default class Board {
  private board;
  private snakeOrLadderAllotment = new Set();
  constructor({
    numberOfTiles = 100,
    snakes = [],
    ladders = [],
  }: {
    numberOfTiles?: number;
    snakes?: { head: number; tail: number }[];
    ladders?: { bottom: number; top: number }[];
  }) {
    let board = [];
    for (let tileNumber = 1; tileNumber <= numberOfTiles; tileNumber++) {
      if (tileNumber === numberOfTiles) board.push(new Tile(tileNumber, 0));
      else board.push(new Tile(tileNumber, tileNumber + 1));
    }
    this.board = board;
    snakes.forEach((snake) => this.addSnake(snake.head, snake.tail));
    ladders.forEach((ladder) => this.addLadder(ladder.bottom, ladder.top));
  }

  public winningTile() {
    return this.board.length;
  }

  public getBoard() {
    return this.board;
  }

  public addSnake(head: number, tail: number) {
    const boardLength = this.board.length;
    if (
      head === tail ||
      head === boardLength ||
      tail === 1 ||
      head - tail <= 0 ||
      head - tail >= boardLength - 2
    )
      throw new Error(
        `Cannot add snake on the board head ${head} tail ${tail}, number must be between 2 to ${
          this.board.length - 1
        }`
      );
    const headTile = this.board.find((t) => t.getNumber() === head);

    if (
      this.snakeOrLadderAllotment.has(head) ||
      this.snakeOrLadderAllotment.has(tail)
    )
      throw new Error(
        `Cannot add snake on the board head ${head} tail ${tail}, as ladder already exists`
      );
    headTile?.addSnake(tail);
    this.snakeOrLadderAllotment.add(head);
    this.snakeOrLadderAllotment.add(tail);
  }

  public addLadder(bottom: number, top: number) {
    const boardLength = this.board.length;
    if (
      bottom === top ||
      bottom === 1 ||
      top === boardLength ||
      top - bottom <= 0 ||
      top - bottom >= boardLength - 2
    )
      throw new Error(
        `Cannot add ladder on the board bottom ${bottom} top ${top}, number must be between 2 to ${
          this.board.length - 1
        }`
      );
    const bottomTile = this.board.find((t) => t.getNumber() === bottom);

    if (
      this.snakeOrLadderAllotment.has(bottom) ||
      this.snakeOrLadderAllotment.has(top)
    )
      throw new Error(
        `Cannot add ladder on the board bottom ${bottom} top ${top}, as sanke already exists`
      );
    bottomTile?.addLadder(top);
    this.snakeOrLadderAllotment.add(bottom);
    this.snakeOrLadderAllotment.add(top);
  }

  public getDestination(currentTilePosition: number, moveByUnits: number) {
    const newTile = this.board.find(
      (t) => t.getNumber() === currentTilePosition + moveByUnits
    );

    if (!newTile)
      throw new Error(
        `Current Tile Number Not Found, ${currentTilePosition} must be between 1 to ${this.board.length}`
      );

    return newTile.getPosition();
  }
}
