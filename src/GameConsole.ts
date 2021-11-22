import Board from "./Board";
import Dice from "./Dice";
import Player from "./Player";
import SnakeAndLadderGame from "./SnakeAndLadderGame";

export default class GameConsole {
  public startSinglePlayerMode() {
    console.log("Starting Snake And Ladder Game");
    const players = [new Player("AJAY")];
    const board = new Board({
      snakes: [{ head: 69, tail: 10 }],
      ladders: [
        { bottom: 11, top: 93 },
        { bottom: 30, top: 90 },
        { bottom: 2, top: 35 },
      ],
    });
    const dice = new Dice();
    const game = new SnakeAndLadderGame(players, board, dice);
    console.log("Starting Single Player Game with", players);
    for (let gameTurn = 0; gameTurn < 20; gameTurn++) {
      console.log(`+++ game turn ${gameTurn + 1} started +++`);

      for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {
        const currentPlayer = players[playerIndex];
        console.log(
          `---- ${currentPlayer.getName()} is at ${game.getPlayerPosition(
            currentPlayer
          )} ----`
        );
        game.makeMove(currentPlayer);
        console.log(
          `---- ${currentPlayer.getName()} rolled ${dice.showRollNumber()} advancing to ${game.getPlayerPosition(
            currentPlayer
          )}`
        );
        if (game.winner()) {
          console.log(`***** ${game.winner()?.getName()} WON ****`);
          break;
        }
      }
      if (game.winner()) {
        break;
      }
      console.log(`+++ game turn ${gameTurn + 1} ended +++`);
    }

    if (!game.winner()) {
      console.log(`##### NO WINNER ####`);
    }
  }

  public startMultiPlayerMode() {
    console.log("Starting Snake And Ladder Game");
    const players = [new Player("AJAY"), new Player("Verma")];
    const board = new Board({
      snakes: [{ head: 69, tail: 10 }],
      ladders: [
        { bottom: 11, top: 93 },
        { bottom: 30, top: 90 },
        { bottom: 2, top: 35 },
      ],
    });
    const dice = new Dice();
    const game = new SnakeAndLadderGame(players, board, dice);
    console.log("Starting Multiplayer Game with", players);
    for (let gameTurn = 0; gameTurn < 20; gameTurn++) {
      console.log(`+++ game turn ${gameTurn + 1} started +++`);

      for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {
        const currentPlayer = players[playerIndex];
        console.log(
          `---- ${currentPlayer.getName()} is at ${game.getPlayerPosition(
            currentPlayer
          )} ----`
        );
        game.makeMove(currentPlayer);
        console.log(
          `---- ${currentPlayer.getName()} rolled ${dice.showRollNumber()} advancing to ${game.getPlayerPosition(
            currentPlayer
          )}`
        );
        if (game.winner()) {
          console.log(`***** ${game.winner()?.getName()} WON ****`);
          break;
        }
      }
      if (game.winner()) {
        break;
      }
      console.log(`+++ game turn ${gameTurn + 1} ended +++`);
    }

    if (!game.winner()) {
      console.log(`##### NO WINNER ####`);
    }
  }
}
