import React from 'react';
import Sliderr from 'react-animated-slider';
import horizontalCss from "react-animated-slider/build/horizontal.css";

const contents = [
    {
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quo velit temporibus quidem iure asperiores dicta expedita pariatur aspernatur soluta!",
        name: "Tim Cook",
        position: "CEO Google",
    },
    {
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quo velit temporibus quidem iure asperiores dicta expedita pariatur aspernatur soluta!",
        name: "Tim Cook",
        position: "CEO Apple",
    },
    {
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quo velit temporibus quidem iure asperiores dicta expedita pariatur aspernatur soluta!",
        name: "Pichai Sundararajan",
        position: "CEO Android",
    }
]
const Testimonials = () => {
    return (
        <div className="mt-5 text-center" id="testimonials">
            <h1>TESTIMONIALS</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Sliderr classNames={horizontalCss}>
                            {contents.map((item, index) => (
                                <div>
                                    <div className="text-center slider-info mt-5 container ps-5" style={{textAlign: "left"}}>
                                        <h3 style={{fontWeight: "300"}}>"{item.review}"</h3>
                                        <h5>{item.name} - {item.position}</h5>
                                    </div>
                                </div>
                            ))}
                        </Sliderr>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;