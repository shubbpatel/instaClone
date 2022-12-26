import React, { useState } from 'react';
import Button from "@mui/material/Button";
import {db, storage} from "./firebase"
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { upload } from '@testing-library/user-event/dist/upload';



function ImageUpload() {

const [caption, setCaption] = useState('');
const [image, setImage] = useState(null);
const [progress, setProgress] = useState(0);

const handleChange = (e) =>{
    if(e.target.files[0]){
        setImage(e.target.files[0])
    }
};

const handleUpload = () =>{
    const storage = getStorage();
    const storageRef = ref(storage, 'some-child');
    
    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    const uploadTask = uploadBytesResumable(storageRef, image);

     uploadTask.on(
        "state_changed",
        (snapshot) =>{
            const progress = Math.round(
                (snapshot.byteTramsferred / snapshot.totalBytes)* 100
            )
            setProgress(progress);
        },
        (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
            });
          }
    )
};

  return (
    <div>
        <input type="text" placeholder='enter Caption' onChange={event => setCaption(event.target)} value={caption} />
        <input type="file" name="" id="" onChange={handleChange}/>
        <Button onClick={handleUpload} >Upload</Button>
    </div>
  )
}


export default ImageUpload;