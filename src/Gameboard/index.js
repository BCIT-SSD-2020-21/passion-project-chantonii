import {useState} from 'react'

export default function Gameboard(props){
    const [isPlaying, setIsPlaying] = useState(false)
    const [pacman, setPacman] = useState({name: "pacman", width: 25, height: 25, color: "yellow", xpos: 25, ypos: 25})
    const [pinky, setPinky] = useState({name: "pinky", width: 25, height: 25, color: "pink", xpos: 250, ypos: 300})
    const [blinky, setBlinky] = useState({name: "blinky", width: 25, height: 25, color: "red",xpos: 300, ypos: 250})
    const [inky, setInky] = useState({name: "inky", width: 25, height: 25, color: "cyan", xpos: 200, ypos: 125})
    const [clyde, setClyde] = useState({name: "clyde", width: 25, height: 25, color: "orange", xpos: 400, ypos: 400})

    const boardWidth = 600;
    const boardHeight = 600;

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

    const updatePos = () => {
        if(pacman.xpos === 575){
            setPacman({...pacman,xpos: 0})
        }else{
            setPacman({...pacman, xpos: pacman.xpos + 25})
        }
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
            <div>
                <button onClick={updatePos}> move </button>
            </div>
        </div>
    );
}
