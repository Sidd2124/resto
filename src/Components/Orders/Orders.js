import { useEffect,useState,useContext } from "react"
import OrderItem from '../OrderItems/OrderItems'
import axios from "axios"
import "./Orders.css"
import Info from "../Context/Context"



const Orders=()=>{

const [orderList,SetorderList]=useState([])
const {OrderdDate}=useContext(Info)

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
SetorderList(OrdersOutput)
   
   

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