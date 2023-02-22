import React from 'react';
import style from './slider.css';
import { avatar, home} from '../export'
import Posts from '../newpost/Posts';

export default function Slider() {
  return (
    <div className='story_post_container' >
    <div className='story_slider'>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
        <div className="story-card">
            <img src={avatar} alt="" />
            <span>shubbpatel </span>
        </div>
    </div>
    <div>
    <Posts/>
    </div>
    <div>
    <Posts/>
    </div>
    <div>
    <Posts/>
    </div>
    <div>
    <Posts/>
    </div>

    </div>
  )
}
