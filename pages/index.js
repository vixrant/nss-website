import React from 'react';

import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer'

export default () => (
    <React.Fragment>
        <Head title='Home Page' />
        <Navbar />
        <Carousel />
        <Footer />
    </React.Fragment>
);
