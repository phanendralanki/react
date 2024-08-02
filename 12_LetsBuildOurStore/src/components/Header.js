import React, { useState,useEffect ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import UserContext from "../context/UserContext";
import {useSelector} from "react-redux";
const Header = () => {

  // let btnName = "Login";

  const [btnName,setBtnName] = useState("login");


  //1.if no dependency array => useEffect will be called on every render
  //2. if the dependency array is empty = [] => useEffect called only once on the initial load, it will not call again and again.
  //3. If dependency array is [btnName] => useEffect called everytime btnName is updated.

  // useEffect(()=> {
  //   console.log("useEffect Called");
  // },[btnName]);

  // ******** Online Status *****
  const onlineStatus = useOnlineStatus(); 

  // ****** USER CONTEXT **********
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  // *********** Selector
  //subscribing to the store using a selector
  const cartItems = useSelector((store)=> store.cart.items);

    return (
      <div className="flex justify-between">
        <div className="logo-container">
          <img
            className="w-28"
            src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
            alt="restaurantLogo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
          <li className="px-4">
            online Status: {onlineStatus? "✅": "❓"}
          </li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact US</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4 font-bold text-lg">
              <Link to="/cart">Cart - ({cartItems.length}) </Link>
            </li>
            <button onClick={()=> 
                {
                  btnName==="login"?setBtnName("logout"):setBtnName("login");
                }
            } className="login-btn">{btnName}</button>

            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;