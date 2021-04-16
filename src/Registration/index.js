import firebase from '../firebase/config.js'
import 'firebase/auth'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function Registration(){
    const [email,setEmail] = useState("")
    // const [username, setUsername] = useState("")
    const [password,setPassword] =useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [user, setUser] = useState()

    let history = useHistory();

    const handleRegister = () =>{
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(`${errorCode}: ${errorMessage}`)
            })
        history.push({pathname:"/", state: {user: user}})
    }

    return(
        <form onSubmit={handleRegister}>
            <label>email:</label>
            <input type-="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <br/>
            {/* <label>username:</label>
            <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            <br/> */}
            <label>password:</label>
            <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <br/>
            <label>confirm password:</label>
            <input type="password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}