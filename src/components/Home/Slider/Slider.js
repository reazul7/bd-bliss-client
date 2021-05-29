import React from "react";
import Sliderr from 'react-animated-slider';
import "./Slider.css";
import horizontalCss from "react-animated-slider/build/horizontal.css";

const content = [
    {
        image:
            "https://cdn.shopify.com/s/files/1/1215/2782/files/leo_oobliss_slide3-h1.jpg?v=1601086934",
        title1: `AVIATOR`,
        title2: `VERRES`,
        title3: `ICEBERGGLASSES`,
        details: "Looked up one of the more obscure latin words",
        button: "SHOP ALL GLASSES",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/1215/2782/files/leo_oobliss_slide2-h1.jpg?v=1601086934&quot",
        title1: `AVIATOR`,
        title2: `VERRES`,
        title3: `ICEBERGGLASSES`,
        details: "Looked up one of the more obscure latin words",
        button: "SHOP ALL GLASSES",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/1215/2782/files/leo_oobliss_slide1-h1.jpg?v=1601086934",
        title1: `AVIATOR`,
        title2: `VERRES`,
        title3: `ICEBERGGLASSES`,
        details: "Looked up one of the more obscure latin words",
        button: "SHOP ALL GLASSES",
    },
];

const Slider = () => {
    return (
        <div>
            <Sliderr classNames={horizontalCss}>
                {content.map((item, index) => (
                    <div
                        class="slide-bg"
                        key={index}
                        style={{
                            background: `url('${item.image}' ) no-repeat center center`,
                            opacity: "0.9",
                            // height: "auto",
                            width: "100%",
                            // backgroundSize: "100% 100%",
                        }}
                    >
                        "
                        <div className="center slider-info mt-5 container ps-5" style={{textAlign: "left"}}>
                            <div className="container"> 
                                <div>
                                    <h1>{item.title1}</h1>
                                    <h1>{item.title2}</h1>
                                    <h1>{item.title3}</h1>
                                </div>
                                <p>{item.details}</p>
                                <button className="btn-area">{item.button}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Sliderr>
        </div>
    );
};

export default Slider;