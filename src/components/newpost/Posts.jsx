import { Avatar } from "@mui/material";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';import style from './posts.css';
import { avatar, save, comment, share, heart, option } from "../export";

export default function Posts() {

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
  
    const handleLikeClick = () => {
      if (!liked) {
        setLikes(likes + 1);
        setLiked(true);
      } else {
        setLikes(likes - 1);
        setLiked(false);
      }
    };



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
        <img onDoubleClick={handleLikeClick} src={avatar} alt="" />
      </div>
      <div className="like_comment_save">
        <div className="lCS">
        <button onClick={handleLikeClick}>
        <FontAwesomeIcon  size="2x" icon={faHeart} color={liked ? 'red' : 'black'} />


      </button>
          {/* <img src={heart} alt="" /> */}
          <img src={comment} alt=""/>
          <img src={share} alt="" />
        </div>
        <div>
          <img src={save} alt="" />
        </div>
      </div>
    </div>
  );
}
