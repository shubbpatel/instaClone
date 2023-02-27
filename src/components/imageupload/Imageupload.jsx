// import React, { useState } from 'react';
// // import firebase from 'firebase/app';
// import 'firebase/storage';

// const firebaseConfig = {
//   // Your Firebase configuration
// };

// firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

// function ImageUpload() {
//   const [image, setImage] = useState(null);
//   const [url, setUrl] = useState('');

//   const handleChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       'state_changed',
//       (snapshot) => {
//         // progress function
//       },
//       (error) => {
//         // error function
//         console.log(error);
//       },
//       () => {
//         // complete function
//         storage
//           .ref('images')
//           .child(image.name)
//           .getDownloadURL()
//           .then((url) => {
//             console.log(url);
//             setUrl(url);
//           });
//       }
//     );
//   };

//   return (
//     <div>
//       <progress value={progress} max="100" />
//       <br />
//       <input type="file" onChange={handleChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <br />
//       <img src={url} alt="Uploaded Image" />
//     </div>
//   );
// }

// export default ImageUpload;
