import React from 'react';
import { SimpleCarouselSlider } from 'react-simple-carousel-image-slider'
import 'react-simple-carousel-image-slider/dist/index.css'
import styles from "./Aboutme/AboutMe.module.css"

  const images = [
    require('../assets/images/gorickyourself.png'),
    require('../assets/images/miniMe2.jpg'),
  ];

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <SimpleCarouselSlider
      images={images} 
      autoplay={false}
      width= "100%"
      height="450px"
      />
    </div>
  );
}

export default Carousel;