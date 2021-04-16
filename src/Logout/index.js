import firebase from '../firebase/config.js'
import {useHistory} from 'react-router-dom'

export default function Logout(){
    firebase.auth().signOut()
    .catch((error) => {
        alert(error)
    });
    let history = useHistory()

    history.push("/")
}