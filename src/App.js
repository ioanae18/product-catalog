//feature-1
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Filters from "./components/Filters";
import Products from "./components/Products";
import data from "./data.json";
import store from "./store";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      size: "",
      sort: "",
    };
  }

  render(){
   return (
     <Provider store = {store}>
    <div className = "grid-container">
      <header>
        <a href ="/"> React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
           <div className="main"> 
              <Products >
              </Products> 
           </div>
           <div className="sidebar">
              <Cart />
              </div>
        </div>
      </main>
      <footer>
        All rights reserved. @Ivan Emilia-Ioana
      </footer>
    </div>
      </Provider>
  );
  }
}

export default App;
