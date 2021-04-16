import './App.css';
import {BrowserRouter as Router, Route,Switch,Link} from "react-router-dom"
import Registration from "./Registration"
import Login from "./Login"
import Home from './Home'

function App() {
  
  return (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Login'>Login</Link></li>
      </ul>
    </div>
    <Switch>    
      <Route exact path="/"> <Home/> </Route>
      <Route exact path="/register"> <Registration/> </Route>
      <Route exact path="/login"> <Login/> </Route>
    </Switch>
  </Router>
  );
}

export default App;
