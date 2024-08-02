import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {

  // let btnName = "Login";

  const [btnName,setBtnName] = useState("login");


  //1.if no dependency array => useEffect will be called on every render
  //2. if the dependency array is empty = [] => useEffect called only once on the initial load, it will not call again and again.
  //3. If dependency array is [btnName] => useEffect called everytime btnName is updated.

  useEffect(()=> {
    console.log("useEffect Called");
  },[btnName]);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
            alt="restaurantLogo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact US</Link>
            </li>
            <li>Cart</li>
            <button onClick={()=> 
                {
                  btnName==="login"?setBtnName("logout"):setBtnName("login");
                }
            } className="login-btn">{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;