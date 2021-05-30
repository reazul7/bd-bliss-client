import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="shop">
      <div className="banner-area d-flex align-items-center">
        <div className="container ">
          <div className="row">
            <div className="col-md-7"></div>
            <div className="col-md-5">
            <h5 className="text-white">WHAT WE'RE ABOUT</h5>
            <h1>SEE THE WORLD <br />DIFFERENTLY</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, cum <br />Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <button className="btn-area">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>

      {/* banner */}
      {/* <div class="card text-white banner-card">
        <img src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_oobliss_banner1-h1.jpg?v=1601088185" class="card-img" alt="..."/>
        <div class="card-img-overlay ">
          <div className="container">
            <div className="row ">
              <div className="col-md-6"></div>
              <div className="col-md-6 text-dark ">
                <h6 className="text-white card-text">WHAT WE'RE ABOUT</h6>
                <h1>SEE THE WORLD <br />DIFFERENTLY</h1>
                <p className="text-white card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iusto, cum <br />Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <button className="btn-area">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
