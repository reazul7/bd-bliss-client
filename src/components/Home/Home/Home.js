import React from 'react';
import ProductList from '../../ProductList/ProductList';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import NavBar from '../NavBar/NavBar';
import Slider from '../Slider/Slider';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Slider/>
            <Banner/>
            <ProductList/>
            <Blog/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;