
import { useState ,useEffect, useContext} from "react";
import "./Orderitem.css";
import Correct from '../Assets/Correct.gif'
import Info from "../Context/Context";

const OrderItem = (props) => {
  const { OrderInfo } = props;
  const { id, Image, Name, Price, Size,OrderDate} = OrderInfo;
  const [deliveryminutes,setdeliveryminutes]=useState(10)
  const[deliverySeconds,setdeliverySeconds]=useState(60)
  const [Shift,SetShift]=useState(`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`)
  
  
 
  
  


  useEffect(()=>{
    const Timer=setInterval(()=>{
        setdeliverySeconds(prevCount=>{
            if(prevCount===0){
setdeliverySeconds(60)
setdeliveryminutes(prevCount=>{if(prevCount===1){

    setdeliverySeconds(0)
    SetShift(`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()-10}`)
    setdeliveryminutes(0)
    clearInterval(Timer)

}else{
    return prevCount-1
}


})
            }else{
                return prevCount-1
            }
        }
    
    )

    },1000)

    return()=>clearInterval(Timer)
  },[])
 

  const Finish=Shift==OrderDate ?<p className="OrderTimer">We'll Serve In {deliveryminutes<=9?`0${deliveryminutes}`:deliveryminutes}:{deliverySeconds<=9?`0${deliverySeconds}`:deliverySeconds} Min </p>:<p className="Paid">Orderd Deliverd</p>
        

  return (
    
      <div className="OrderTopContainer">
        <div>
            
            
            
        <img className="OrderLogo" src={Image} alt="FooditemLogo" />
        {Finish}
        </div>
        <div>
        <h1 className="HeadingTitle">{Name}</h1>
        <div className="Description">
          <h3>Price: {Price} ₹</h3>
          
        </div>


        <div>
         
          <p>{Size} Sets</p>
          <p className="Paid">{Size * Price}₹ Paid <img className="Correct" src={Correct} alt="Correct"/> </p>
          
         
        </div>
        </div>
        
      </div>
   
  );
};

export default OrderItem;
