import React from 'react';
import ProductList from '../../ProductList/ProductList';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import NavBar from '../NavBar/NavBar';
import Slider from '../Slider/Slider';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div id="home">
            <NavBar/>
            <Slider/>
            <Banner/>
            <ProductList/>
            <Blog/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;