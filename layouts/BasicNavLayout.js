import React from 'react';

import Head from '../components/Head';
import Navbar from '../components/Navbar';

export default ({ title, children }) => (
    <React.Fragment>
        <Head title={title} />
        <Navbar />
        { children }
    </React.Fragment>
);
