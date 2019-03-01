import React from 'react';
import BasicNavLayout from '../layouts/BasicNavLayout';
import Carousel from '../components/Carousel';
import { Container, Row, Col } from 'reactstrap';
import styles from './index.css';

export default () => (
	<React.Fragment>
		<div className={styles.Main}>
		    <BasicNavLayout title="Home">
		        <Carousel />
		        <br/><br/>
			        <Container>
			        	<Row>
			        		<Col xs="12" sm="12" md="6" lg="6" className="my-3">
			        			<img className="img-fluid" src="../static/images/principal.jpg" />
			        		</Col>
			        		<Col xs="12" sm="12" md="6" lg="6" className="my-3">
			        			<h4><strong>From the Principal's Desk</strong></h4>
			        		</Col>
			        	</Row>
			        </Container>	        
		    </BasicNavLayout>
		</div>
	</React.Fragment>    
)
