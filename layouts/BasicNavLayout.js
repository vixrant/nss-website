import React from 'react';

import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from  '../components/Footer';

import styles from "./BasicNavLayout.css";

export default ({ title, children }) => (
    <div className={styles.App}>
        <Head title={title} />
        <Navbar />
        <div className={styles.layout}>
            { children }
        </div>
        <Footer />
    </div>
);
