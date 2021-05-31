import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
        <footer class="site-footer pt-4">
        <div class="container">
        <div class="row">
        <div class="col-sm-12 col-md-6">
        <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
        </div>

        <div class="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul class="footer-links">
        <li><a href="http://scanfcode.com/category/c-language/">Men</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Women</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Kids</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Fashion</a></li>
              <li><a href="http://scanfcode.com/category/android/">Premium</a></li>
        </ul>
        </div>

        <div class="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul class="footer-links">
        <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
        </ul>
        </div>
        </div>
        <hr />
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                <p>Copyright &copy; {(new Date()).getFullYear()} All Rights Reserved by <a style={{color: '#ECBA78', fontWeight: 'bold'}} href="#home">bd-bliss</a></p>
                    <img src="https://cdn.shopify.com/s/files/1/1215/2782/files/leo_oobliss_banner8-h1.png?v=1601088185" alt="" />
                </div>
            </div>
        </div>
        </footer>
    </div>
  );
};

export default Footer;
