import { useContext, useState,useEffect } from "react"
import Info from "../Context/Context"
import "./Cartitem.css"

const CartItem=(Props)=>{
    const{CartItemInfo}=Props
    const {id,Image,Name,Price,Rating,Quantity}=CartItemInfo
    const{RemoveUpdates,UpdatedBill}=useContext(Info)
    const [quantity,setquntity]=useState(1)
   
    const TotalPrice = Price * quantity;

    useEffect(() => {
        const TotalPrice = parseFloat(Price) * quantity;
        UpdatedBill(TotalPrice);
    }, [quantity, Price, UpdatedBill,TotalPrice]);

    const UpdateRemoveItems=()=>{
        RemoveUpdates(id)
        
    }

    const DecreaseQauntity=()=>{
        setquntity(prevCount=>{if(prevCount===0){
            setquntity(0)
        }else{
            return prevCount-1
        }
    })
    }

    const IncreaseQauntity=()=>{
        setquntity(prevCount=>prevCount+1)
    }
    return(
<div>
<div className="FoodItemContainer">
<img className="ItemLogo" src={Image} alt="FooditemLogo"/>
<h1 className="HeadingTitle">{Name}</h1>
<div className="Description">
<p>Price:{Price} ₹,</p>
{Rating&&<p className="Quantity">{Rating} ★ </p>}
{Quantity&&<p className="Quantity">{Quantity}</p>}
</div>

<div>
    <button onClick={DecreaseQauntity}>-</button>
    <button>{quantity}</button>
    <button onClick={IncreaseQauntity}>+</button>
    
   <p>{TotalPrice}₹</p>
<button className="AddtoCart" onClick={UpdateRemoveItems}>Remove</button>
</div>
        </div>
</div>
    )
}

export default CartItem