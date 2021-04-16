import {Link} from 'react-router-dom'
import firebase from '../firebase/config.js'
import 'firebase/auth'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import "./login.css"

export default function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const [user, setUser] = useState()

    const boardWidth = 600;
    const boardHeight = 600;

    let history = useHistory();

    const handleLogin = () =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("login fail")
                console.log(`${errorCode}: ${errorMessage}`)
            });
        history.push({pathname:"/", state: {user: user}})
    }

    const remoteGameStart = () => {
        history.push({pathname:"/", state:{isPlaying: true}})
    }

    return(
        <div className="App">
            <div className="header">
                <h1>Pacman Clone</h1>
                <p>Welcome Player 1</p>    
                
                <div>
                    <button onClick={remoteGameStart}> start game </button>
                    <button > end game</button>
                </div>
                
                <p>Press start to begin</p>
                
                <text>Points: 0</text>
            </div>
            <div id="background" style={{width: boardWidth, height: boardHeight, borderWidth: boardWidth/2, background:"black", marginLeft: "auto", marginRight: "auto"}}>
                <h2>Login</h2>
                <form className="loginForm" onSubmit={handleLogin}>
                    <label>email:</label>
                    <input type-="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <br/>
                    <label>password:</label>
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <br/>
                <p><Link to="/register"> New here? Click here to Register</Link></p>
            </div>
        </div>
    )
}