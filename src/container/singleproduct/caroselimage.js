import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from "react-redux";

function Caroselimage(){
    const images = useSelector((state) => state.product.images);

    return (
        <div className="caro-container">
            <Carousel autoPlay interval="5000" transitionTime="5000">
            {images.map(image =>{
                return(
                    <div class="carsoel-image">
                        <img src={image.src} alt=""/>
                    </div>
                )
            })}
            </Carousel> 
        </div>
         
    )
}

export default Caroselimage