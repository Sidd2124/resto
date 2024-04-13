import React, { useContext } from "react";
import Info from "../Context/Context";
import "./Cartitem.css";

const CartItem = (props) => {
  const { CartItemInfo } = props;
  const { id, Image, Name, Price, Rating, Quantity, Size } = CartItemInfo;
  const { RemoveUpdates } = useContext(Info);

 

  const UpdateRemoveItems = () => {
    RemoveUpdates(id);
  };

  return (
    <div>
      <div className="FoodItemContainer">
        <img className="ItemLogo" src={Image} alt="FooditemLogo" />
        <h1 className="HeadingTitle">{Name}</h1>
        <div className="Description">
          <p>Price: {Price} ₹,</p>
          {Rating && <p className="Quantity">{Rating} ★ </p>}
          {Quantity && <p className="Quantity">{Quantity}</p>}
        </div>

        <div>
         
          <p>{Size} Sets</p>
          <p>{Size * Price}₹</p>
          <button className="AddtoCart" onClick={UpdateRemoveItems}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
