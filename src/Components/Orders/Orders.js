import { useEffect,useState, } from "react"
import OrderItem from '../OrderItems/OrderItems'
import axios from "axios"
import "./Orders.css"




const Orders=()=>{

const [orderList,SetorderList]=useState([])


    useEffect(()=>{
        GettingOrderInfo()
    },[])

    const GettingOrderInfo=async()=>{

        try{
            
    const URL = 'https://restomenu-b798e-default-rtdb.firebaseio.com/Orders.json'
    const Codeing= await axios.get(URL)
    const arrayOfObjects = Object.values(Codeing.data)
  const OrdersOutput=arrayOfObjects.map((each)=>each.FinelCartList)
    
  OrdersOutput.map(subArray => {
    subArray.map(item => {
      
      console.log(item);
    });
  });
SetorderList(OrdersOutput.reverse())
   
   

        }catch(error){
console.log(error)
        }

    }
    return(
        <div>
            <h1 className="OrdersTitle"> Your Orders</h1>
            <div className="OrderList">

            {orderList.map(subArray => {
    return subArray.map(item => { // Added return statement here
        return <OrderItem OrderInfo={item}/>; // Added return statement here
    });
})}

          
           </div>
        </div>
    )
}

export default Orders