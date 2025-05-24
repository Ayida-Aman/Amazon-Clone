import React from 'react'
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import css from "./CarouselEffect.module.css"



function CarouselEffect() {
  return (
    <>
    <Carousel 
    autoPlay={true}
    infiniteLoop={true}
    showIndicators={false}
    showThumbs={false}
    >
        {
            img.map((imageItem) => (
                 <img src={imageItem} alt="" />
            ))
        }

    </Carousel>
    <div className={css.hero__img}></div>
    </>
  )
}

export default CarouselEffect