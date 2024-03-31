import "./foodiems.css"

const Fooditems=(props)=>{
    const {Details}=props
    const {Image,Name,Price,Rating,Quantity,Type}=Details
    return(
        <div className="FoodItemContainer">
<img className="ItemLogo" src={Image} alt="FooditemLogo"/>
<h1>{Name}</h1>
<h3>Price:{Price} ₹</h3>
{Rating&&<p>{Rating} Rating</p>}
{Quantity&&<p>{Quantity}</p>}
<h3>{Type}</h3>
        </div>
    )

}


export default Fooditems 