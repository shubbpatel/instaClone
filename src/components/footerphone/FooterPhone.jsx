import { Avatar } from 'antd';
import React from 'react';
import { avatar, home, reels, add, search } from '../export';
import style from './footerphone.css';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";


export default function FooterPhone() {
const navigate = useNavigate();

onAuthStateChanged(auth, (currentUser)=>{
    if(!currentUser){
        navigate('/login');
    }
})
  return (
    <div className='phone_footer'>
        <div className='footerContent'>
            <img src={home} alt="" />
            <img src={search} alt="" />
            <img src={add} alt="" />
            <img src={reels} alt="" />
            <img onClick={() => signOut(auth)}  className='img' src={avatar} alt="" style={{width:'40px'}}/>
            {/* <Avatar src={avatar} /> */}
        </div>
        
    </div>
  )
}
