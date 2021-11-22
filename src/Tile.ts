export default class Tile {
  private number;
  private next;
  private nextForSnake;
  private nextForLadder;
  constructor(tileNumber: number, next: number) {
    this.number = tileNumber;
    this.next = next;
    this.nextForSnake = 0;
    this.nextForLadder = 0;
  }

  public getNumber() {
    return this.number;
  }

  public getPosition() {
    if (this.hasSnake()) return this.nextForSnake;
    if (this.hasLadder()) return this.nextForLadder;
    return this.number;
  }

  public hasSnake() {
    return this.nextForSnake ? true : false;
  }

  public hasLadder() {
    return this.nextForLadder ? true : false;
  }

  public addSnake(destinationTileNumber: number) {
    this.nextForSnake = destinationTileNumber;
  }

  public addLadder(destinationTileNumber: number) {
    this.nextForLadder = destinationTileNumber;
  }
}
