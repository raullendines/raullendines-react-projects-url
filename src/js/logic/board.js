  import {WINNER_COMBOS} from "../utils/constants.js"
  
  export const checkWinnerFrom = (boardToCheck) => {
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c] 
      ){
        return boardToCheck[a]
      }
    }
    return null
  }

  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)
  }

  export const randomTurn = () =>{
    return Math.floor(Math.random() * (1 - 0 + 1) + 0)
  }