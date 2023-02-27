import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer';
import App from '../src/App';
import Search from './components/search/Search';
import {BrowserRouter as Router, Link ,Route, Routes} from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signup/Signup';
import Reels from './components/reels/Reels';
import Explore from './components/explore/Explore';
import ImageUpload from './components/imageupload/Imageupload';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
    {/* <Route exact path='/' element={<Header/>} /> */}
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/signup' element={<SignUp/>} />
    <Route exact path='/reels' element={<Reels/>} />
    <Route exact path='/explore' element={<Explore/>} />
    <Route exact path='/' element={<App/>} />
    <Route exact path='/search' element={<Search/>} />
    <Route exact path='/upload' element={<ImageUpload/>} />

    </Routes>
    
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
