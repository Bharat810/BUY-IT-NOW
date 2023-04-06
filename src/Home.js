import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
        src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000"
        />
      

      <div className="home_row">
        <Product title='The lean startup' price={500} img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3}/>
        <Product title='The lean startup' price={500} img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3}/>
        
      </div>
      <div className="home_row">
        
      <Product title='The lean startup' price={500} img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3}/>
      <Product title='The lean startup' price={500} img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3}/>
      <Product title='The lean startup' price={500} img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3}/>
        
      </div>
      <div className="home_row">
      <Product title='The lean startup' price={500} img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={3}/>
        
      </div>
      </div>
    </div>
  );
}

export default Home;
