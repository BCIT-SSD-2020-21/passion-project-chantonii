import {useState,useEffect} from 'react'

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
        document.getElementById("gamepad").focus();
    }

    const gameOver = () => {
        setIsPlaying(false)
    }

    const renderCharacter = (character) => {
        return(<div key={character.name} style={{width: character.width, height: character.height, position: "relative", left: character.xpos, top: character.ypos, background: character.color}}></div>)
    }

    const handleKeyDown = (e) => {
        var arrows =[37,38,39,40]
        if(arrows.indexOf(e.keyCode) >= 0){
            movePacman(e.keyCode)
        }
    }

    const movePacman = (keypressed) => {
        if(keypressed === 39){ //left
            if(pacman.xpos === 575){
                setPacman({...pacman,xpos: 0})
            }else{
                setPacman({...pacman, xpos: pacman.xpos + 25})
            }
        }else if(keypressed === 38){ //up
            if(pacman.ypos === 0){
                setPacman({...pacman,ypos: 575})
            }else{
                setPacman({...pacman, ypos: pacman.ypos - 25})
            }
        }else if(keypressed === 37){ //right
            if(pacman.xpos === 0){
                setPacman({...pacman,xpos: 575})
            }else{
                setPacman({...pacman, xpos: pacman.xpos - 25})
            }
        }else{ //down
            if(pacman.ypos === 575){
                setPacman({...pacman, ypos: 0})
            }else{
                setPacman({...pacman, ypos: pacman.ypos + 25})
            }
        }
    }

    useEffect(() => {
        var moveId
        if(isPlaying){
            moveId = setInterval(()=> {ghostMovement()},1000)
        }else{
            clearInterval(moveId)
        }
        return () =>  clearInterval(moveId)
    }, [isPlaying,pinky])

    const ghostMovement = () => {
        var move = Math.round(Math.random() * 3)
        if(move === 0){ //left
            if(pinky.xpos === 575){
                setPinky({...pinky,xpos: 0})
            }else{
                setPinky({...pinky, xpos: pinky.xpos + 25})
            }
        }else if (move === 1) { //up
            if(pinky.ypos === 0){
                setPinky({...pinky,ypos: 575})
            }else{
                setPinky({...pinky, ypos: pinky.ypos - 25})
            }
        }else if (move === 2) { //right
            if(pinky.xpos === 0){
                setPinky({...pinky,xpos: 575})
            }else{
                setPinky({...pinky, xpos: pinky.xpos - 25})
            }
        }else { //down
            if(pinky.ypos === 575){
                setPinky({...pinky,ypos: 0})
            }else{
                setPinky({...pinky, ypos: pinky.ypos + 25})
            }
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
            <input id="gamepad" onKeyDown={e => handleKeyDown(e)} style={{opacity: 0}}/>
            <div id="gameBoard" style={{width: boardWidth, height: boardHeight, borderWidth: boardWidth/2, background:"black", marginLeft: "auto", marginRight: "auto"}}>
                
                {characters.map((character) => (
                    renderCharacter(character)
                ))}
            </div>
            {/* <div>
                <button onClick={updatePos}> move </button>
            </div> */}
        </div>
    );
}
