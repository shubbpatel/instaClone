import React from 'react';
import style from "./reels.css";

const Reels = ({ videoSrc, caption, likes, comments, shares }) => {
  return (
    <div className="reels">
      <video src={videoSrc} className="reels-video" autoPlay muted loop></video>
      <div className="reels-overlay">
        <div className="reels-overlay-content">
          <h2>{caption}</h2>
          <div className="reels-overlay-stats">
            <p>{likes} likes</p>
            <p>{comments} comments</p>
            <p>{shares} shares</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reels;
