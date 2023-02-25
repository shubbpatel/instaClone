import React, { useState } from 'react';
import style from './signup.css'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import {auth} from "../../firebase"
import { Link } from 'react-router-dom';


export default function Signup() {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [formValues, setFormValues] = useState({
    fullname:"",
    username:"",
    email: "",
    password: "",
  });

  const navigate = useNavigate();



  const handleSignIn = async () => {
    try {
      // const auth = getAuth();
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("signed up");
    } catch (err) {
      console.log(err);
    }
  };
  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser){
      navigate('/');
  }
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(`Username: ${username}`);
  //   console.log(`Email: ${email}`);
  //   console.log(`Password: ${password}`);
  // };

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
          placeholder='username'

            type="username"
            id="username"
            name="username"
            value={formValues.username}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input
          placeholder='Full name'

            type="fullname"
            id="fullname"
            name="fullname"
            value={formValues.fullname}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input
          placeholder='Phone number or email address'

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
        <button type="submit" onClick={handleSignIn}>Sign up</button>
        <div className="separator">
        <h2><span>OR</span></h2>
      </div>
        <p>
          Have an account?{" "}
          <Link style={{color:'green'}} to="/login" className="signup-link">
            Log in
          </Link>
        </p>
        
    </div>
    </div>
  );
}

