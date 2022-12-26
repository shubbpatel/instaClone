import React from 'react';
import Postcss from "./Post.css";
import imageUrl from './image/insta.jpg';
import logoimage from './image/shubham.jpg';
import { Avatar } from '@mui/material';

function Post({username, caption, imageURL}) {
 // console.log("shubham ganda")
  //console.log(username)
  return (<div className='post'>
    <div className="postHeader">
    <Avatar
       className='post_Avatar'
       alt='S'
       src={logoimage}
      />
      {/* <p>{key}</p> */}
      <h3>{username}</h3>
    </div>
      <div className='postImagediv'>
        <img className='postImage' src={imageUrl} alt="img" /></div>
        {/* image */}

        <h4 className='postText'><strong>{username}</strong> {caption}</h4>
        {/* username + caption */}
    </div>
  )
}

export default Post;