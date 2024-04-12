import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from "./Components/LogIn/Login";
import Home from './Components/Home/Home'
import Store from './Components/Store/Store'
import Cart from './Components/Cart/Cart';
import Info from './Components/Context/Context';
import Contact from './Components/ContactUS/Contactus'






class App extends Component{
 state={user:localStorage.getItem("userName"),userStatus:false,CartItems:JSON.parse(localStorage.getItem("CartItems")) || [],Bill:[]}



 AddingItems = (D) => {
this.setState(prevState=>{
  const UpdatedItemList=[...prevState.CartItems,D]
  localStorage.setItem("CartItems",JSON.stringify(UpdatedItemList));
  return{
    CartItems:UpdatedItemList
  }
})
};

RemovedCartItems=(F)=>{
  const {CartItems}=this.state
  const FilterdRemoved=CartItems.filter((each)=>each.id!==F)
  this.setState({CartItems:FilterdRemoved},
    localStorage.setItem("CartItems",JSON.stringify(FilterdRemoved)))
}

EnterBill=(X)=>{
this.setState(prevState=>({Bill:[...prevState.Bill,X]}))

}

 Updateusernameglobelly=(N)=>{
  localStorage.setItem("userName",N)
  
 }

 AlterUserVisibility=()=>{
  this.setState(prevState=>({userStatus:!prevState.userStatus}))
 }
  render(){
    const {user,userStatus,CartItems,Bill,}=this.state
    console.log(Bill)
  
return(
  <Info.Provider value={{username:user,UserTitileUpdate:this.Updateusernameglobelly,UserInfo:userStatus,UpdateUserVisibility:this.AlterUserVisibility,FinelCartList:CartItems,UpdateItemsToList:this.AddingItems,RemoveUpdates:this.RemovedCartItems,BillAmount:Bill,UpdatedBill:this.EnterBill,}}>
  <Router>
  <Switch>
    <Route exact path="/Login" component={LogIn} />
    <Route exact path="/" component={Home}/>
    <Route exact path="/Store" component={Store}/>
    <Route exact path="/Cart" component={Cart}/>
    <Route exact path="/Contact" component={Contact}/>
  </Switch>
</Router>
</Info.Provider>
)

  }
}

export default App;


