import React from 'react';
import Carousel from '../components/Carousel';
import { Container, Row, Col } from 'reactstrap';

import BasicNavLayout from '../layouts/BasicNavLayout';
import './index.css';

export default () => (
	<BasicNavLayout title="Home" className={"Main"}>
	    <Carousel />
	    <br/><br/>
	        <Container>
	        	<Row>
	        		<Col xs="12" sm="12" md="6" lg="6" className="my-3 wow slideInLeft">
	        			<img className="img-fluid" src="../static/images/principal.jpg" />
	        		</Col>
	        		<Col xs="12" sm="12" md="6" lg="6" className="my-3">
	        			<h4><strong>From the Principal's Desk</strong></h4>
	        		</Col>
	        	</Row>
	        </Container>      
	</BasicNavLayout>
)
