import React from 'react';
import BasicNav from '../layouts/BasicNav';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer'

export default () => (
	<React.Fragment>
	    <BasicNav title="CAMP">
	        <Carousel />
	    </BasicNav>
	    <Footer />
    </React.Fragment>
)
