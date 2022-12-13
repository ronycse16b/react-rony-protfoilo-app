import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BannerServices from '../Banner/BannerServices';
import Contact from '../Contact/Contact';



const Home = () => {

    return (
       
        
         
            <>
            <Banner></Banner>
            <About></About>
            <BannerServices></BannerServices>
            <Contact></Contact>
            </>
        
    );
};

export default Home;