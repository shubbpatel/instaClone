import React from 'react';
import style from './explore.css';


const Explore = ({ imageSrc, title, description, likes, comments }) => {
  return (
    <div className="explore-card">
      <img src={imageSrc} alt={title} className="explore-card-image" />
      <div className="explore-card-info">
        <h2 className="explore-card-title">{title}</h2>
        <p className="explore-card-description">{description}</p>
        <div className="explore-card-stats">
          <p>{likes} likes</p>
          <p>{comments} comments</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
