import './App.css';
import {BrowserRouter as Router, Route,Switch,Link} from "react-router-dom"
import Registration from "./Registration"
import Login from "./Login"
import Home from './Home'
import {useState} from 'react'
import firebase from './firebase/config.js'

function App() {
  const [user,setUser] = useState()
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setUser(user)
          console.log(user.email)
        } else {
          console.log("no user")
        }
      });

  const handleLogout = () =>{
    firebase.auth().signOut()
    .catch((error) => {
        alert(error)
    });
    window.location.reload()
  }
  
  return (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        {user?
          <button onClick={handleLogout}>Logout</button>
          :
          <li><Link to='/Login'>Login</Link></li>
        }
        
      </ul>
    </div>
    <Switch>    
      <Route exact path="/"> <Home user={user}/> </Route>
      <Route exact path="/register"> <Registration/> </Route>
      <Route exact path="/login"> <Login/> </Route>
      <Route exact path="/logout"></Route>
    </Switch>
  </Router>
  );
}

export default App;
