import React from "react";
import "./ItemCard.scss";

const ItemCard = (props) => {
  return (
    
      <div className="container">
        <div className="card">
          <h3 className="name">{props.name}</h3>
          <h4 className="size">
            <label>Size:</label>
            {props.size}
          </h4>
          <h4 className="price">
            <label>Price:</label>
            {props.price}
          </h4>
          <button>Add to card</button>
        </div>
      </div>
    
  );
};

export default ItemCard;
