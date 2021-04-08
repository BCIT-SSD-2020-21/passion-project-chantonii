import React, {useState, useEffect} from 'react'
import Pacman from '../Pacman'

export default function Gameboard(props){
    const [isPlaying, setIsPlaying] = useState(false)
    const boardWidth = 600;
    const boardHeight = 600;

    const gameOn = () => {
        setIsPlaying(true)
    }

    const gameOver = () => {
        setIsPlaying(false)
    }
    
    return(
        <div>
            <div>
                <button onClick={gameOn}> start game </button>
                <button onClick={gameOver}> end game</button>
            </div>
            {isPlaying ?
                <p>Enjoy the game!</p> : <p>Press start to begin</p>
            }
            <svg width={boardWidth} height={boardHeight}>
                <rect x={0} y={50} width={boardWidth} height={boardHeight} fill="#FFFFF" />
            </svg>
        </div>
    );
}
