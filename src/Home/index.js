import Gameboard from '../Gameboard'
import '../App.css';
import {useState} from 'react'

export default function Home(props){
    const [user,setUser] = useState()
    if(props.user){
        setUser(props.user)
        console.log(user)
    }
    return(
        <div className="App">
            <h1>Pacman Clone</h1>
            <Gameboard></Gameboard>  
        </div>        
    )

}