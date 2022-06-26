import React from "react";
import "./App.css";
import ItemCard from "./component/Store/ItemCard";
import nike from "./assets/Images/nike.png";
import adidas from "./assets/Images/adidas.png";
import jordan from "./assets/Images/jordan.png";
import puma from "./assets/Images/puma.png";
import rebook from "./assets/Images/rebook.png";
import Time from "./component/Store/Time/Time";

function App() {
  return (
    <div>
      <Time />
      <nav>
        <h3>
          <span>Sport</span>Age
        </h3>
        <a href="#Login">Login</a>
      </nav>
      <h1> Responsive eCommerce for Shoes Store Using React</h1>
      <div className="container">
        <div>
          <img src={nike} width="150px" height="100px" />
          <ItemCard name="Nike" size="36 EU" price="80$" />
        </div>
        <div>
          <img src={adidas} width="150px" height="100px" />
          <ItemCard name="addidas" size="41 EU" price="100$"></ItemCard>
        </div>
        <div>
          <img src={puma} width="150px" height="100px" />
          <ItemCard name="Puma" size="38 EU" price="150$"></ItemCard>
        </div>
        <div>
          <img src={rebook} width="150px" height="100px" />
          <ItemCard name="Rebook" size="39 EU" price="65$"></ItemCard>
        </div>
        <div>
          <img src={jordan} width="150px" height="100px" />
          <ItemCard name="Air Jordan" size="40 EU" price="140$"></ItemCard>
        </div>
      </div>
    </div>
  );
}

export default App;
