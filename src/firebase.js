import { initializeApp } from 'firebase/app';
import {collection, getDocs, } from 'firebase/firestore/lite';
import {getFirestore} from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


// import { auth } from "firebase/auth";
// import { provider } from 'firebase/auth';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_JcCnpNIK1GLSmhDJtO4cwYL50x2MeVc",
    authDomain: "instagram-clone-b2697.firebaseapp.com",
    projectId: "instagram-clone-b2697",
    storageBucket: "instagram-clone-b2697.appspot.com",
    messagingSenderId: "817047666662",
    appId: "1:817047666662:web:5efa2ef0bba771f64c6027"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);

// const storage = getFirestore();
// const auth = getAuth(app);
// const provider = new googleAuthProvider(app)

// // // Get a list of cities from your database
// async function getCi(db) {
//     const citiesCol = collection(db, 'posts');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }

export { db, app, database, storage };