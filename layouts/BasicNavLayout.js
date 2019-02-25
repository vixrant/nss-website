import React from 'react';

import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from  '../components/Footer';

export default ({ title, children }) => (
    <React.Fragment>
        <Head title={title} />
        <Navbar />
        { children }
        <Footer />
    </React.Fragment>
);
