import { useContext,useState } from "react"
import {Link} from 'react-router-dom'
import CartItem from '../CartItems/CartItem'
import Info from "../Context/Context"
import  Hungry from '../Assets/Hungry.gif'
import axios from "axios"
import './Cart.css'

const Cart =(props)=>{
    const {FinelCartList,username,MakeCartClear}=useContext(Info)
    const [ordersCount,SetordersCount]=useState(0)
   

    var FinelPrice = 0;
    
  if(FinelCartList.length!==0){  
    
    FinelPrice = FinelCartList.reduce((total, each) => total + each.Size * each.Price, 0);

    
  }



const postToServer = async () => {
 
  SetordersCount(prevCount => prevCount + 1);
  console.log(ordersCount)

 
  const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1; 
const currentYear = currentDate.getFullYear();

const OrderDate=`${currentDay}/${currentMonth}/${currentYear}`


  const FinelUpdatesCartList = {...FinelCartList,OrderCount:ordersCount,DateofOrder:OrderDate,userName:username};

  try {
    const URL = 'https://restomenu-b798e-default-rtdb.firebaseio.com/Orders.json';
    const Posting = await axios.post(URL, FinelUpdatesCartList);
    console.log(Posting);
    MakeCartClear()
  } catch (error) {
    console.log(error);
  }
};



  const handleSubmit = ()=>{
    
    var options = {
      key: "rzp_test_juufusxwk4a9jj",
      key_secret:"ejXOtYG7NpnIoEztcocR",
      amount: FinelPrice *100,
      currency:"INR",
      name:"Ideal Kitchen",
      description:"Thank you",
      handler: function(){
        
        postToServer()
        const {history}=props
        history.push("/Orders")
     
       
      },
      prefill: {
        name:"Sidd",
        email:"siddhumsd@gmail.com",
        contact:"9347877159"
      },
      notes:{
        address:"Razorpay Corporate office"
      },
      theme: {
        color:"#3399cc"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
 
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
    
    
    </div><button onClick={handleSubmit} className="Amount-button">Amount to be Pay {FinelPrice}/-</button>
    
    </div>}
    
</div>
    )
}

export default  Cart