import "./foodiems.css"
import { useState } from "react"
const Fooditems=(props)=>{
    const {Details}=props
    const {Image,Name,Price,Rating,Quantity}=Details
    const[itemQuantity,setitemQuantity]=useState(0)
    const Increase=()=>{
        setitemQuantity(prevCount=>prevCount+1)
    }
    const Decrese=()=>{
        setitemQuantity(prevCount=>{if(prevCount===0){
            setitemQuantity(0)
        }else{
            return prevCount-1
        }
    })

    }
    return(
        <div className="FoodItemContainer">
<img className="ItemLogo" src={Image} alt="FooditemLogo"/>
<h1 className="HeadingTitle">{Name}</h1>
<div className="Description">
<p>Price:{Price} ₹,</p>
{Rating&&<p className="Quantity">{Rating} ★ </p>}
{Quantity&&<p className="Quantity">{Quantity}</p>}
</div>

<div>
<button className="AddtoCart">Add to Cart</button>
</div>
        </div>
    )

}


export default Fooditems 