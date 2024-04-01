import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from "./Components/LogIn/Login";
import Home from './Components/Home/Home'
import Store from './Components/Store/Store'
import Info from './Components/Context/Context';





class App extends Component{
 state={user:localStorage.getItem("userName"),userStatus:false}

 Updateusernameglobelly=(N)=>{
  localStorage.setItem("userName",N)
  
 }

 AlterUserVisibility=()=>{
  this.setState(prevState=>({userStatus:!prevState.userStatus}))
 }
  render(){
    const {user,userStatus}=this.state
return(
  <Info.Provider value={{username:user,UserTitileUpdate:this.Updateusernameglobelly,UserInfo:userStatus,UpdateUserVisibility:this.AlterUserVisibility}}>
  <Router>
  <Switch>
    <Route exact path="/Login" component={LogIn} />
    <Route exact path="/" component={Home}/>
    <Route exact path="/Store" component={Store}/>
  </Switch>
</Router>
</Info.Provider>
)

  }
}

export default App;


