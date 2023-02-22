import React from "react";
import header from "../components/header.css";
import {
  home,
  loupe,
  avatar,
  add,
  bell,
  chat,
  explore,
  reels,
  menu,
} from "./export";
import logo from "../image/instagram.png";
import { Avatar } from "@mui/material";
// import logoimage from './image/shubham.jpg';

// import home from '../image/home.png'

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        {/* <img src={logo} alt="" />  */}
        <span>Instagram</span>
      </div>
      <div className="links">
        <div className="tags flex a">
          <img src={home} alt="" />
          <a href="">Home</a>
        </div>
        <div className="tags flex">
          <img src={loupe} alt="" />
          <a href="">Search</a>
        </div>
        <div className="tags flex">
          <img src={explore} alt="" />
          <a href="">Explore</a>
        </div>
        <div className="tags flex">
          <img src={reels} alt="" />
          <a href="">Reels</a>
        </div>
        <div className="tags flex">
          <img src={chat} alt="" />
          <a href="">Messages</a>
        </div>
        <div className="tags flex">
          <img src={bell} alt="" />
          <a href="">Notifications</a>
        </div>
        <div className="tags flex">
          <img src={add} alt="" />
          <a href="">Create</a>
        </div>
        <div className="tags flex avatar">
          <Avatar />
          {/* <img src={avatar} alt="" /> */}
          <a href="">Profile</a>
        </div>
      </div>
      <div className="menu flex">
        <img src={menu} alt="" />
        <a href="">More</a>
      </div>
    </div>
  );
}
