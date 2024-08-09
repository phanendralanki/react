import React, { useState,useEffect ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import UserContext from "../context/UserContext";
const Header = () => {

  // let btnName = "Login";

  const [btnName,setBtnName] = useState("login");

  // ******** Online Status *****
  const onlineStatus = useOnlineStatus(); 

  // ****** USER CONTEXT **********
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

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
            <li className="px-4">Cart</li>
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