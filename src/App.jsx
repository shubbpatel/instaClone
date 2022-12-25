import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post" ;
import logo from './image/instagram.png';
import bike from './image/bike.png';
import { db, app } from "./firebase";
import {collection, getDocs, query, doc, setDoc, onSnapshot} from 'firebase/firestore';




function App() {

    const [posts, setPosts] = useState([]);
    // const db = getDatabase();
    // const dbpost = ref(db, 'posts/');

    
   
    useEffect(() => {

      const q = query(collection(db, 'posts'));
        onSnapshot(q, (querySnapshot) => {
       
      //  console.log('posts');
       
          const posts = []
          // setPosts(snapshot.docs.map(doc => doc.data()))

          querySnapshot.forEach((doc) => {
            posts.push({ id: doc.id, data: doc.data() })
          })
    
          setPosts(posts)
        })
      }, []);






    return <div className="app" >
        <div className="appHeader" >
            <img className="appHeader_img" src={logo} alt="" />
            <div className="searchbox">
            <input className="inputbox"></input>
            <button className="sButton">Search</button>
            </div>
        </div>
{posts.map(post => (
            <Post username={post.username} caption={post.caption} imageURL={post.imageUrl} />
        )) 
        }
        <Post username="shubham" caption="React is too much fun" imageUrl="./image/bike" />
        <Post username="ReactApp" caption="React is too much fun" imageUrl="./image/instagram.png" />
        <Post username="Instagram" caption="React is too much fun" imageUrl="./image/instagram.png" />
    
    </div>
}

export default App;