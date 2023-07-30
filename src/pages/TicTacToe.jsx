
/* eslint-disable react/prop-types */
import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "../components/TicTacToe/Square";
import { TURNS } from "../js/utils/constants.js";
import { randomTurn, checkEndGame, checkWinnerFrom } from "../js/logic/board";
import { WinnerModal} from "../components/TicTacToe/WinnerModal"
import { GameBoard } from "../components/TicTacToe/Board";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null)
  const [turn, setTurn] = useState(TURNS.X);

  //Reset game
  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setWinner(null)
    const number = randomTurn() 
    console.log(number)

    number == 0 ? setTurn(TURNS.X) : setTurn(TURNS.O)
  }
 
  const updateBoard = (index) => {
    if (board[index] || winner) return 
    
    //Actualizar turno
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newBoard)

    //Check ganador
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <GameBoard board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  );
}

export default TicTacToe;
