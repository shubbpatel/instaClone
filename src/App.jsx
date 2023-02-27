import React from 'react';
import SearchBox from './components/experiment';
import Footer from './components/footer/Footer';
import Header from './components/Header';
import Slider from './components/slider/Slider';


export default function App() {
  return (
    <div>
    <Header/>
    <Slider/>
    <Footer/>
    <SearchBox/>
    </div>
  )
}
