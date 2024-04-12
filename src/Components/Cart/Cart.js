import { useContext } from "react"
import {Link} from 'react-router-dom'
import CartItem from '../CartItems/CartItem'
import Info from "../Context/Context"
import './Cart.css'

const Cart =()=>{
    const {FinelCartList,username,BillAmount}=useContext(Info)
  if(FinelCartList.length!==0){
    const Price=FinelCartList.map((each)=>each.Price)
    const FinelPrice=Price.reduce((One,Two)=>One+Two)
    
  }
    return(
<div >
    
    {FinelCartList.length===0?  <div className="cart-message">
      <h3>Feeling hungry.....? Explore our delicious recipes to satisfy your cravings</h3>
      <Link to="./Store" className="order-button">
        Order from Here
      </Link>
    </div>:<div>
      <h3 className="TitileCart">{username} Your's Cart</h3>
      <div className="itemslist">{FinelCartList.map((each)=><CartItem CartItemInfo={each}/>)
    }
    
    
    </div> <h1>{BillAmount}</h1></div>}
    
</div>
    )
}

export default  Cart