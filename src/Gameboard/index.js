import {useState,useEffect} from 'react'
import Leaderboard from '../Leaderboard'
import firebase from '../firebase/config.js'
import 'firebase/firestore'
import './gameboard.css'

export default function Gameboard(props){
    var name
    if(props){
        var tempname = props.username
        if(tempname){
            var splitname = tempname.split("@")
            var username = splitname[0]
            name = username
        }
    }
    
    const db = firebase.firestore()

    const [isPlaying, setIsPlaying] = useState(false)

    const [pacman, setPacman] = useState({name: "pacman", width: 25, height: 25, color: "yellow", xpos: 25, ypos: 25})
    const [pinky, setPinky] = useState({name: "pinky", width: 25, height: 25, color: "pink", xpos: 250, ypos: 300})
    const [blinky, setBlinky] = useState({name: "blinky", width: 25, height: 25, color: "red",xpos: 300, ypos: 250})
    const [inky, setInky] = useState({name: "inky", width: 25, height: 25, color: "cyan", xpos: 200, ypos: 125})
    const [clyde, setClyde] = useState({name: "clyde", width: 25, height: 25, color: "orange", xpos: 400, ypos: 400})

    const [point, setPoint] = useState(0)
    const [points, setPoints] = useState([])

    const boardWidth = 600;
    const boardHeight = 600;

    const characters = [pacman,pinky,blinky,inky,clyde]

    const compare = (a,b) => {
        if(a.score < b.score){
            return 1;
        }
        if(a.score > b.score){
            return -1
        }
        return 0
    }

    const getLeaderboard = async () => {
        const boardinfo = await db
            .collection('leaderboard')
            .get()
        var tempList =[]
        boardinfo.docs.map(doc => 
            tempList.push(doc.data())
        )
        tempList.sort(compare)
        if(tempList.length > 10) tempList.length = 10;
        setPoints(tempList)
    }

    useEffect(()=>{
        getLeaderboard()
    },[])

    const gameOn = () => {
        setIsPlaying(true)
        document.getElementById("gamepad").focus();
    }
    
    
    const updateLeaderboard = async () => {
        if(!name){
            name = "ANT"
        }

        await db
            .collection('leaderboard')
            .add({
                name: name,
                score: point
            })
    }

    const gameOver = () => {
        setIsPlaying(false)
        updateLeaderboard()
        getLeaderboard()
        setPoint(0)
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
    }, [isPlaying,pinky,blinky,inky,clyde,point])

    const ghostMovement = () => {
        setPoint(prev => prev + 10)
        var pinkyMove = Math.round(Math.random() * 3)
        if(pinkyMove === 0){ //left
            if(pinky.xpos === 575){
                setPinky({...pinky,xpos: 0})
            }else{
                setPinky({...pinky, xpos: pinky.xpos + 25})
            }
        }else if (pinkyMove === 1) { //up
            if(pinky.ypos === 0){
                setPinky({...pinky,ypos: 575})
            }else{
                setPinky({...pinky, ypos: pinky.ypos - 25})
            }
        }else if (pinkyMove === 2) { //right
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

        var blinkyMove = Math.round(Math.random() * 3)
        if(blinkyMove === 0){ //left
            if(blinky.xpos === 575){
                setBlinky({...blinky,xpos: 0})
            }else{
                setBlinky({...blinky, xpos: blinky.xpos + 25})
            }
        }else if (blinkyMove === 1) { //up
            if(blinky.ypos === 0){
                setBlinky({...blinky,ypos: 575})
            }else{
                setBlinky({...blinky, ypos: blinky.ypos - 25})
            }
        }else if (blinkyMove === 2) { //right
            if(blinky.xpos === 0){
                setBlinky({...blinky,xpos: 575})
            }else{
                setBlinky({...blinky, xpos: blinky.xpos - 25})
            }
        }else { //down
            if(blinky.ypos === 575){
                setBlinky({...blinky,ypos: 0})
            }else{
                setBlinky({...blinky, ypos: blinky.ypos + 25})
            }
        }

        var inkyMove = Math.round(Math.random() * 3)
        if(inkyMove === 0){ //left
            if(inky.xpos === 575){
                setInky({...inky,xpos: 0})
            }else{
                setInky({...inky, xpos: inky.xpos + 25})
            }
        }else if (inkyMove === 1) { //up
            if(inky.ypos === 0){
                setInky({...inky,ypos: 575})
            }else{
                setInky({...inky, ypos: inky.ypos - 25})
            }
        }else if (inkyMove === 2) { //right
            if(inky.xpos === 0){
                setInky({...inky,xpos: 575})
            }else{
                setInky({...inky, xpos: inky.xpos - 25})
            }
        }else { //down
            if(inky.ypos === 575){
                setInky({...inky,ypos: 0})
            }else{
                setInky({...inky, ypos: inky.ypos + 25})
            }
        }

        var clydeMove = Math.round(Math.random() * 3)
        if(clydeMove === 0){ //left
            if(clyde.xpos === 575){
                setClyde({...clyde,xpos: 0})
            }else{
                setClyde({...clyde, xpos: clyde.xpos + 25})
            }
        }else if (clydeMove === 1) { //up
            if(clyde.ypos === 0){
                setClyde({...clyde,ypos: 575})
            }else{
                setClyde({...clyde, ypos: clyde.ypos - 25})
            }
        }else if (clydeMove === 2) { //right
            if(clyde.xpos === 0){
                setClyde({...clyde,xpos: 575})
            }else{
                setClyde({...clyde, xpos: clyde.xpos - 25})
            }
        }else { //down
            if(clyde.ypos === 575){
                setClyde({...clyde,ypos: 0})
            }else{
                setClyde({...clyde, ypos: clyde.ypos + 25})
            }
        }
    }
    
    return(
        
        <div>
            {username ?
                <p>Welcome {name}</p> : <p>Welcome Player 1</p>    
            }
            <div>
                <button onClick={gameOn}> start game </button>
                <button onClick={gameOver}> end game</button>
            </div>
            
            {isPlaying ?
                <p>Enjoy the game!</p> : <p>Press start to begin</p>
            }
            <text style={{paddingLeft: 150}}>Points: {point}</text>
            <input id="gamepad" onKeyDown={e => handleKeyDown(e)} style={{opacity: 0}}/>
            {
                isPlaying ?
                <div id="gameBoard" style={{width: boardWidth, height: boardHeight, borderWidth: boardWidth/2, background:"black", marginLeft: "auto", marginRight: "auto"}}>
                    {characters.map((character) => (
                        renderCharacter(character)
                    ))}
                </div> :
                <Leaderboard points={points}/>
            }
            
            
        </div>
    );
}
