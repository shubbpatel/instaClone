import React, { useState } from 'react';
import style from './login.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../../firebase";
import Footer from '../footer/Footer';
import { blue } from '@mui/material/colors';


const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      // const auth = getAuth();
      const { email, password } = formValues;
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
       const rp = document.getElementById('wrong-password');
       rp.textContent = "incorrect username or password";
       rp.style = "color:red";
      //  rp.style = "font-size:12px";
    }
  };

  // const auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      navigate('/');
  }
  });


  return (
    <div className='login_container'>
    <div className="login">
        <div className="logo-container">
        <img style={{width:'120px'}}
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input
          placeholder='Phone number, username or email address'

            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">Password</label> */}
          <input
          placeholder='password'
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            } />
            <span id='wrong-password' ></span>
        </div>
        <button type="submit" onClick={handleLogin}>Log In</button>
        <div className="separator">
        <h2><span>OR</span></h2>
      </div>
        <p>
          Don't have an account?{" "}
          <Link style={{color:'green'}} to="/signup" className="signup-link">
            Sign up
          </Link>
        </p>
        
        {/* <Link to="/signup"><h5>Don't have an account? Sign up</h5></Link> */}
        {/* <Footer/> */}
    </div>
    </div>
  );
};

export default Login;
