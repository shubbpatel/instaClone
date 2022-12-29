import React, { useEffect, useState } from "react";
import "./App.css";
import Post from "./Post";
import logo from "./image/instagram.png";
import bike from "./image/bike.png";
import { db, app, database } from "./firebase";
import {
  collection,
  getDocs,
  query,
  doc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import ImageUpload from "./ImageUpload";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const handleOpen = () => setOpen(true);

  useEffect(()=>{
    const auth = getAuth();

 const unsubscribe = auth.onAuthStateChanged((authUser) =>{
  if(authUser){
    // user logged in
    console.log(authUser);
    setUser(authUser);

  }else{
    // user logged out
    setUser(null);
  }

  return () => {
    unsubscribe();
  }
})
  },[user, username]);

  // const db = getDatabase();
  // const dbpost = ref(db, 'posts/');

  useEffect(() => {

    
    const q = query(collection(db, "posts"));
    onSnapshot(q, (querySnapshot) => {
      //  console.log('posts');

      const posts = [];
      // setPosts(snapshot.docs.map(doc => doc.data()))
      // console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
       // console.log(doc.data())
        posts.push({ id: doc.id, username: doc.data().username, imageURL: doc.data().imageURL, caption: doc.data().caption });
      });
   console.log(posts)
      setPosts(posts);
    });
  }, []);

  const signUp = (event) => {
    event.preventDefault();

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((authUser) => {
    // Signed in
    return authUser.user.updateProfile({
      displayName: username
    }) 
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  // setOpen(false)
    
  };
const signIn = (event) =>{
  event.preventDefault();
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  setOpenSignIn(false)
}


  return (
    <div className="app">


{/* <ImageUpload username={user.displayName} /> */}

        {user?.displayName?(
          
          <ImageUpload username={user.displayName}/>
          ):(
            <h3>Log in First</h3>
        )}

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <form action="" className="signUpForm">
          <center>
            <img className="appSignUp_img" src={logo} alt="" />
            </center>
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Button type="submit" onClick={signUp}>Sign UP</Button>
            </form>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
        </Box>
      </Modal>


      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <Box sx={style}>
          <form action="" className="signUpForm">
          <center>
            <img className="appSignUp_img" src={logo} alt="" />
            </center>
            {/* <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Input> */}
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Button type="submit" onClick={signIn}>Sign In</Button>
            </form>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
        </Box>
      </Modal>

      <div className="appHeader">
        <img className="appHeader_img" src={logo} alt="" />
        <div className="searchbox">
          <input type="text" className="inputbox" />
          <button className="sButton" >Search</button>
        </div>
          {user ?(
           <Button onClick={() => getAuth().signOut()}>Log Out</Button>
           ):
           <div>
           <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
           <Button onClick={() => setOpen(true)}>Sign UP</Button>
           </div>
           }

      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
      <Post
        username="shubbpatel"
        caption="React is too much fun"
        imageURL={bike}
      />
      <Post
        username="shubbpatel"
        caption="React is too much fun"
        imageURL={bike}
      />
      <Post
        username="shubbpatel"
        caption="React is too much fun"
        imageURL={bike}
      />
    
    </div>
  );
}

export default App;
