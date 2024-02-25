import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import cartIcon from "../assets/cart-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import heartIcon from "../assets/heart-icon.svg";
import Search from "./Search";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cartItems = useSelector(state => state.cart.products)

  let role = "";
  const [searchFocused, setSearchFocused] = useState(false);
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false); // New state to control nav menu visibility

  const toggleNavMenu = () => {
    setIsNavMenuVisible(!isNavMenuVisible); // Toggle the visibility
  };

  if (sessionStorage.getItem("role")) {
    role = sessionStorage.getItem("role");
  } else {
    // window.location.href = "/login";
  }

  return (
    <header>
      <nav className="navbar">

        <div className="nav-logo">
          <Link to="/home"><h3>ESSENCE</h3></Link>
        </div>

        <div className="hamburger-menu" onClick={toggleNavMenu}>
          <i class="fa-solid fa-bars"></i>
        </div>

         <ul className={`nav-menu ${isNavMenuVisible ? 'visible' : ''}`}>
          <Link to="/home" className="nav-link" onClick={toggleNavMenu}>HOME</Link>
          <Link to="/mens" className="nav-link" onClick={toggleNavMenu}>MEN'S</Link>
          <Link to="/womens" className="nav-link" onClick={toggleNavMenu}>WOMEN'S</Link>
          <Link to="/accessories" className="nav-link" onClick={toggleNavMenu}>ACCESSORIES</Link>
        </ul>

        <div className="flex">

          <div className="searchbar">
            <input className="searchInput" type="text" name="" id="" placeholder="Search for Products" onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}/>
            <div className="searchbgblack">
              {/* <img className="searchIcon" src={searchIcon} alt="" /> */}
              <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        
          <div className="">
            <Link to="/login"><img className="profileIcon" src={profileIcon} alt="" /></Link>
              {role === "admin" && (
            <Link to="/userlist"><img className="profileIcon" style={{ border: "1px solid red" }} src={profileIcon} alt=""/></Link>
              )}
              {(role === "seller" || role === "admin") && (
            <Link to="/myproducts"><img className="profileIcon" style={{ border: "1px solid blue" }} src={profileIcon} alt="" /></Link>
              )}
             <Link className="heartIconlink" to="/wishlist"><img className="heartIcon" src={heartIcon} alt="" /></Link>
             <Link to="/cart"><img className="cartIcon" src={cartIcon} alt="" /></Link>
             <div className="nav-cart-count">{cartItems.length}</div>
          </div>
        
        </div>

      </nav>
      {searchFocused && <Search />}
    </header>
  );
};

export default Navbar;
