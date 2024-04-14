
import { useState, useEffect, } from "react";
import "./Orderitem.css";
import Correct from '../Assets/Correct.gif'


const OrderItem = (props) => {
  const { OrderInfo } = props;
  const { id, Image, Name, Price, Size, OrderDate } = OrderInfo;

  const [deliveryminutes, setdeliveryminutes] = useState(10)
  const [deliverySeconds, setdeliverySeconds] = useState(60)
  const [Shift, SetShift] = useState(localStorage.getItem("DateChange"))


  console.log(Shift)




  useEffect(() => {


    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    
    if (hours === 0 && minutes === 0 && seconds === 0) {
      localStorage.setItem("DateChange", `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`);
      const storedDate = localStorage.getItem("DateChange");
      SetShift(storedDate)
    }
    const Timer = setInterval(() => {
      setdeliverySeconds(prevCount => {
        if (prevCount === 0) {
          setdeliverySeconds(60)
          setdeliveryminutes(prevCount => {
            if (prevCount === 1) {

              setdeliverySeconds(0)
              setdeliveryminutes(0)
              localStorage.setItem("DateChange", `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear() - 20}`);
              const storedDate = localStorage.getItem("DateChange");
              SetShift(storedDate)
             clearInterval(Timer)
        } else {
              return prevCount - 1
            }
          })
        } else {
          return prevCount - 1
        }
      }

      )

    }, 10)

    return () => clearInterval(Timer)
  }, [])


  const Finish = Shift == OrderDate ? <p className="OrderTimer">We'll Serve In {deliveryminutes <= 9 ? `0${deliveryminutes}` : deliveryminutes}:{deliverySeconds <= 9 ? `0${deliverySeconds}` : deliverySeconds} Min </p> : <p className="Paid">Orderd Deliverd</p>


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

          <p>{Size} {Size === 1 ? "Set" : "Sets"}</p>
          <p className="Paid">{Size * Price}₹ Paid <img className="Correct" src={Correct} alt="Correct" /> </p>

          <p>Orderd On {OrderDate}</p>
        </div>
      </div>

    </div>

  );
};

export default OrderItem;
