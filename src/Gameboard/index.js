import React, {useState, useEffect} from 'react'
import Character from '../Character'

export default function Gameboard(props){
    const [isPlaying, setIsPlaying] = useState(false)
    const boardWidth = 600;
    const boardHeight = 600;

    const pacman = new Character("yellow",25,25);
    const pinky = new Character("pink",75,75)

    const characters = [pacman, pinky]

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
            <div id="gameBoard" style={{width: boardWidth, height: boardHeight, borderWidth: boardWidth/2, background:"black", display: "block", marginLeft: "auto", marginRight: "auto"}}>
                <div key={pacman} style={{width: pacman.width, height: pacman.height, left: pacman.xpos,top: pacman.ypos, background: pacman.color}}></div>
                <div key={pinky} style={{width: pinky.width, height: pinky.height, left: pinky.xpos,top: pinky.ypos, background: pinky.color}}></div>
            </div>
            
        </div>
    );
}
