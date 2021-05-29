import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselSlider = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_oobliss_slide3-h1.jpg?v=1601086934" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_oobliss_slide2-h1.jpg?v=1601086934&quot" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_oobliss_slide1-h1.jpg?v=1601086934" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselSlider;