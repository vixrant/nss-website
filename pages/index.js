import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

import Carousel from '../components/Carousel';
import ReportsTable from '../components/ReportsTable';

import BasicNavLayout from '../layouts/BasicNavLayout';
import '../static/css/index.css';

export default () => (
	<BasicNavLayout title="Home" className="Main">
	    <Carousel />
	        <Container>
	        	<br/><br/><br/>
				<Row>
					<Col>
						<Jumbotron className="homeInfo">
							<h2 className="display-5">Not Me, But You!</h2>
							<hr className="my-2" />		        
							<p className="lead wow slideInLeft">
								The National Service Scheme (NSS) has been enthusiastically conducting activities to help people from the past 49 years. It was launched on Gandhiji's centenary year to continue his ideas of community service among the youth of our nation. NSS is a student association of the youth studying in university.
							</p>
							<p className="lead wow slideInRight">
								One such student organisations is DJNSS, the NSS unit  of Dwarkadas J. Sanghvi college of Engineering, Vile Parle (E). With a unique motto " Help, Connect, Inspire ", the organisation has been helping people enthusiastically for the past 8 years and have a vision to continue ahead. 
							</p>
							<p className="lead wow slideInLeft">
								DJNSS, has been conducting many city as well as district-level social service activities. As a part of a government unit, they are permitted to adopt a village for a period of 5 years to facilitate positive impacts among rural & tribal communities. DJNSS thus has adopted Ambewadi and Narpad, Dahanu.
							</p>		        		
						</Jumbotron>
					</Col>
					<Col md={2}>
						<ReportsTable />
					</Col>
				</Row>
				<br/>
	        	<Row>
	        		<Col xs="12" sm="12" md="6" lg="6" className="my-3">
	        			<img className="img-fluid" src="../static/images/photos/principal.jpg" />
	        		</Col>
	        		<Col xs="12" sm="12" md="6" lg="6" className="my-3">
	        			<h4><strong>From the Principal's Desk</strong></h4>
	        		</Col>
	        	</Row>
	        	<br/>	        
	        </Container>     
	</BasicNavLayout>
)
