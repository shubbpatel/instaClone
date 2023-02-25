import React, { useState } from "react";
import header from "../components/header.css";
import {
  home,
  search,
  avatar,
  add,
  bell,
  chat,
  explore,
  reels,
  menu,
} from "./export";
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../firebase";



export default function Header() {

  const [showMenu, setShowMenu] = useState(false);
  function handleMenuClick() {
    setShowMenu(!showMenu);
  }
  const mouseOut = (()=> {
    setShowMenu(false)
  })
  const navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigate('/login');
  }
  });

//  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo">
        {/* <img src={logo} alt="" />  */}
        <span>Instagram</span>
      </div>
      <div className="links">
        <div className="tags flex a">
          <img src={home} alt="" />
          <a href="/">Home</a>
        </div>
        <div className="tags flex" >
          <img src={search} alt="" />
          <Link to="/search">Search</Link>

          {/* <a href="/search">Search</a> */}
        </div>
        <div className="tags flex">
          <img src={explore} alt="" />
          <Link to="/explore">Explore</Link>

          {/* <a href="/">Explore</a> */}
        </div>
        <div className="tags flex">
          <img src={reels} alt="" />
          <Link to="/reels">Reels</Link>
          {/* <a href="/">Reels</a> */}
        </div>

        <div className="tags flex">
          <img src={chat} alt="" />
          <a href="/">Messages</a>
        </div>
        <div className="tags flex">
          <img src={bell} alt="" />
          <a href="/">Notifications</a>
        </div>
        <div className="tags flex">
          <img src={add} alt="" />
          <a href="/">Create</a>
        </div>
        <div className="tags flex avatar">
          <Avatar style={{width:'30px', height:'auto'}} />
          {/* <img src={avatar} alt="" /> */}
          <a href="/">Profile</a>
        </div>
      </div>
      <div className="menu-container menu tags flex" onMouseLeave={mouseOut} onClick={handleMenuClick}>
        <img src={menu} alt="" />
        <button className="menu-button" >More</button>
        {showMenu &&
        <div className="menu-card">
          <ul>
            <li>Settings</li>
            <li>Your Activity</li>
            <li>Saved</li>
            <li>Switch appearance</li>
            <li>Report a problem</li>
            <li>Switch account</li>
            <li onClick={() => signOut(auth)} >Log out</li>
            
          </ul>
        </div>
      }
    </div>
    </div>
  );
}
