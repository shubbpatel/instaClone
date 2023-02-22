import { Avatar } from "@mui/material";
import React from "react";
import style from './posts.css';
import { avatar, save, comment, share, heart, option } from "../export";

export default function Posts() {
  return (
    <div className="userPost">
      <div className="postsHead">
        <div className="usernameAvatar">
          <Avatar src={avatar} />
          <span>Shubbpatel</span>
        </div>
        <img src={option} alt="" />
      </div>


      <div className="post_image">
        <img src={avatar} alt="" />
      </div>
      <div className="like_comment_save">
        <div className="lCS">
          <img src={heart} alt="" />
          <img src={comment} alt="" />
          <img src={share} alt="" />
        </div>
        <div>
          <img src={save} alt="" />
        </div>
      </div>
    </div>
  );
}
