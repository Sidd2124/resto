import { useContext } from "react"
import Info from "../Context/Context"
import "./foodiems.css"

const Fooditems=(props)=>{
    const {Details}=props
    const {Image,Name,Price,Rating,Quantity}=Details
    const {UpdateItemsToList}=useContext(Info)
    const AddItemsToList=()=>{
        UpdateItemsToList(Details)
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
<button className="AddtoCart" onClick={AddItemsToList}>Add to Cart</button>
</div>
        </div>
    )

}


export default Fooditems 