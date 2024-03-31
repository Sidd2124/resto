import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from "./Components/LogIn/Login";
import Home from './Components/Home/Home'
import Store from './Components/Store/Store'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Login" component={LogIn} />
        <Route exact path="/" component={Home}/>
        <Route exact path="/Store" component={Store}/>
      </Switch>
    </Router>
  );
}

export default App;
