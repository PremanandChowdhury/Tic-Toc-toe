import React, { useState } from 'react'
import Square from './Square'
import calculateWinner from '../helper'

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i) => {
    const squareValue = squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squareValue[i] = xIsNext ? 'X' : 'O'
    setSquares(squareValue)
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />
  }

  let status
  const XO = xIsNext ? 'X' : 'O'

  // Calculating the winner
  const winner = calculateWinner(squares)
  if (winner) {
    status = 'winner: ' + winner
  } else {
    status = `Next Player: ${XO}`
  }

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
