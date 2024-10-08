/*
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {

   const[btnNameReact, setBtnNameReact] = useState("Login");
   console.log("Header render");

   useEffect(() => {
      console.log("useEffect called from header");
   }, []);

   return (
      <div className="header">
      <div className="logo-container">
         <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={() => {btnNameReact == "Login" ?setBtnNameReact("Logout") : setBtnNameReact("Login")}}>{btnNameReact}</button>
         </ul>
         {console.log("sdf")}
      </div>
   </div>
   )
}

export default Header;