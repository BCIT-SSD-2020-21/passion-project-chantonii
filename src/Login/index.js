import {Link} from 'react-router-dom'
import firebase from '../firebase/config.js'
import 'firebase/auth'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const [user, setUser] = useState()

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

    return(
        <div>
            <form onSubmit={handleLogin}>
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

    )
}