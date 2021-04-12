import {useState} from 'react'
import Character from '../Character'

export default function Gameboard(props){
    const [isPlaying, setIsPlaying] = useState(false)
    const boardWidth = 600;
    const boardHeight = 600;

    const pacman = new Character("pacman","yellow",25,25);
    const pinky = new Character("pinky","pink",75,75);
    const blinky = new Character("blinky","red", 350,250);
    const inky = new Character("inky","cyan", 200,125);
    const clyde = new Character("clyde","orange", 450, 25);

    const characters = [pacman,pinky,blinky,inky,clyde]

    const gameOn = () => {
        setIsPlaying(true)
    }

    const gameOver = () => {
        setIsPlaying(false)
    }

    const renderCharacter = (character) => {

        return(<div key={character.name} style={{width: character.width, height: character.height, position: "relative", left: character.xpos, top: character.ypos, background: character.color}}></div>)
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
            <div id="gameBoard" style={{width: boardWidth, height: boardHeight, borderWidth: boardWidth/2, background:"black", marginLeft: "auto", marginRight: "auto"}}>
                {characters.map((character) => (
                    renderCharacter(character)
                ))}
            </div>
            
        </div>
    );
}
