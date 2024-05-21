import React from 'react';


import Header from "../common/Header"
import Slider from './Slider';
import Photo from './Photo';
import Brand from './Brand';
import CollectionProducts from './CollectionProducts';
import Journal from './Journal';
import Photo2 from './Photo2';
import Photo3 from './Photo3';
import Products from './Products';
import SliderAll from './SliderAll';
import SliderProduct2 from './SliderProduct2';
import SliderProduct3 from './SliderProduct3';
import SliderProducts from './SliderProducts';
import Footer from '../common/Footer';






const Home = () => {
  return (
    <>
    <Header />
    <Slider />
    <Products />
    <SliderProducts />
    <CollectionProducts />
    <Photo />
    <SliderProduct2 />
    <Photo2 />
    <SliderProduct3 />
    <SliderAll />
    <Brand />
    <Photo3 />
    <Journal />
    <Footer />
    </>

  )
}

export default Home;