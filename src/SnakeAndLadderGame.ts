import Board from "./Board";
import Dice from "./Dice";
import Player from "./Player";

export default class SnakeAndLadderGame {
  private board;
  private playersPositionHM: any;
  private players;
  private dice;
  private _winner: Player | null;
  constructor(players: Player[], board: Board, dice: Dice) {
    this.board = board;
    this.dice = dice;
    this._winner = null;
    this.playersPositionHM = {};
    this.players = players.map((p) => p.getName());
    players.forEach((p, i) => (this.playersPositionHM[i] = 0));
  }

  private getPlayerId(player: Player) {
    const playerId = this.players.findIndex(
      (pName) => pName === player.getName()
    );
    if (playerId < 0) throw new Error("Player not found");
    return playerId;
  }

  private getPositionOfAPlayerByID(playerId: number) {
    return this.playersPositionHM[playerId];
  }

  private setPlayerPosition(playerId: number, position: number) {
    const newHM = { ...this.playersPositionHM, [playerId]: position };
    this.playersPositionHM = newHM;
  }

  public getPlayerPosition(player: Player) {
    return this.getPositionOfAPlayerByID(this.getPlayerId(player));
  }

  private checkForWinner(player: Player) {
    if (this.getPlayerPosition(player) === this.board.winningTile()) {
      this._winner = player;
    }
  }

  public winner() {
    return this._winner;
  }

  public makeMove(player: Player) {
    const diceNumber = this.dice.roll();
    try {
      const playerPostionNext = this.board.getDestination(
        this.getPlayerPosition(player),
        diceNumber
      );
      this.setPlayerPosition(this.getPlayerId(player), playerPostionNext);
    } catch (error) {}
    this.checkForWinner(player);
  }
}
