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
        } else {
          console.log("no user")
        }
      });
  
  return (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        {user?
          <li><Link to="/Logout">Logout</Link></li>
          :
          <li><Link to='/Login'>Login</Link></li>
        }
        
      </ul>
    </div>
    <Switch>    
      <Route exact path="/"> <Home/> </Route>
      <Route exact path="/register"> <Registration/> </Route>
      <Route exact path="/login"> <Login/> </Route>
      <Route exact path="/logout"></Route>
    </Switch>
  </Router>
  );
}

export default App;
