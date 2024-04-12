import { useContext } from "react"
import {Link} from 'react-router-dom'
import CartItem from '../CartItems/CartItem'
import Info from "../Context/Context"
import  Hungry from '../Assets/Hungry.gif'
import './Cart.css'

const Cart =()=>{
    const {FinelCartList,username,BillAmount}=useContext(Info)
    var FinelPrice = 0;
    
  if(FinelCartList.length!==0){
    const Price=FinelCartList.map((each)=>each.Price)
     FinelPrice=Price.reduce((One,Two)=>One+Two)
    
  }
    return(
<div >
    
    {FinelCartList.length===0?  <div className="cart-message">
      <img src={Hungry} alt="Hungry Icon"/>
      <h3>Explore our delicious recipes to satisfy your cravings.....</h3>
      
      <Link to="./Store" className="order-button">
        Order from Here
      </Link>
    </div>:<div className="Kind">
      <h3 className="TitileCart">{username} Your's Cart</h3>
      <div className="itemslist">{FinelCartList.map((each)=><CartItem CartItemInfo={each}/>)
    }
    
    
    </div><button className="Amount-button">Amount to be Paid {FinelPrice}/-</button></div>}
    
</div>
    )
}

export default  Cart