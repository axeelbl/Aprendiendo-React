import {useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square.jsx"
import { TURNS} from "./constants.js"
import { checkWinner } from "./logic/board.js"

function App() {
  const [board,setBoard] = useState(Array(9).fill(null))

  const [turn,setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null) // null es que no hay ganador y false es que hay empate

  

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) =>{
    return newBoard.every((square) => square != null)
  }

  const updateBoard = (index) => {
    // no actualizamos esta posicion si tiene algo
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false) // empate
    }
  }


  // Esto es lo que devuelves, que muestra/renderizas 
  return( 
    <main className="board">

      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Reset del Juego</button>
      <section className="game">
        {
          board.map((square,index)=>{
            return(
              <Square
                  key={index}
                  index = {index}
                  updateBoard={updateBoard}  
                >
                  {square}
                </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected = {turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected = {turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {
        winner != null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner == false
                  ? 'Empate'
                  : 'Ganó:' 
                }
              </h2>

              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de Nuevo</button>
              </footer>
            </div>
          </section>
        )
      }




    </main>



  )
}

export default App
