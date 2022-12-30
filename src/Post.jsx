import React, { useEffect, useState } from 'react';
import Postcss from "./Post.css";
import imageURL from './image/insta.jpg';
import logoimage from './image/shubham.jpg';
import { Avatar } from '@mui/material';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import {db} from "./firebase"


function Post({username, caption, imageURL, postId}) {

const [comment, setComment] = useState([]);

// useEffect(()=>{
//   let unsubscribe;
//   if(postId){
//     unsubscribe = collection(db, "posts")
//     .doc(postId)
//     .collection('comments')
//     .onSnapshot((querySnapshot)=> {
//       setComment(querySnapshot.docs.map((doc) => doc.data()))
//     })
//   }

//   // return () => {
//   //   unsubscribe();
//   // }
// }, [postId])

 
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
        <img className='postImage' src={imageURL} alt="img" /></div>
        {/* image */}

        <h4 className='postText'><strong>{username}</strong> {caption}</h4>
        <form action="">
<input className='comment'  type="text" onChange={event =>  setComment(event.target.value)}  value={comment} />

        </form>
    </div>
  )
}

export default Post;