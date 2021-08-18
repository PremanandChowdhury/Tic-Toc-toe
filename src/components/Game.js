import React from 'react'
import Board from './Board'

const Game = () => {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        <div>{/* Game Info */}</div>
        <ol>{/* Display the move here! */}</ol>
      </div>
    </div>
  )
}

export default Game
