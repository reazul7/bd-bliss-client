import React from 'react';
import ProductList from '../../ProductList/ProductList';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
// import CarouselSlider from '../CarouselSlider/CarouselSlider';
import NavBar from '../NavBar/NavBar';
// import Products from '../Products/Products';
import Slider from '../Slider/Slider';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div id="home">
            <NavBar/>
            {/* <CarouselSlider/> */}
            <Slider/>
            <Banner/>
            {/* <Products/> */}
            <ProductList/>
            <Blog/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;