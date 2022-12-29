import React, { useState } from 'react';
import Button from "@mui/material/Button";
import {db, storage} from "./firebase"
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { upload } from '@testing-library/user-event/dist/upload';
// import { firebase } from './firebase';
import { collection,serverTimestamp, addDoc } from 'firebase/firestore';




function ImageUpload({username}) {

const [caption, setCaption] = useState("");
const [image, setImage] = useState(null);
const [progress, setProgress] = useState(0);

const handleChange = (e) =>{
    if(e.target.files[0]){
        setImage(e.target.files[0])
    }
};

const handleUpload = () =>{

  const storage = getStorage();
  
  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: 'image/jpeg'
  };
  
  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, 'images/' + image.name);
  const uploadTask = uploadBytesResumable(storageRef, image, metadata);
  
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        // post the image inside database
        addDoc(collection(db, "posts"),{
          timestamp: serverTimestamp(),
          caption: caption,
          imageURL: downloadURL,
          username: username  
        })


      });
    }
  );
};

  return (
    <div>
        <progress value={progress} max="100" />
        <input type="text" placeholder='enter Caption' onChange={event => setCaption(event.target)} value={caption} />
        <input type="file" name="" id="" onChange={handleChange}/>
        <Button onClick={handleUpload} >Upload</Button>
    </div>
  )
}


export default ImageUpload;