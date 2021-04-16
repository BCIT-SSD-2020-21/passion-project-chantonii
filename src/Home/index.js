import Gameboard from '../Gameboard'
import '../App.css';

export default function Home(props){
    if(props){
        var user = props.user
    }
    return(
        <div className="App">
            <h1>Pacman Clone</h1>
            {user?
                <Gameboard username={user.email}/>  : <Gameboard />
            }
            
        </div>        
    )

}