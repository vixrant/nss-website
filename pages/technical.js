import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

import BasicNavLayout from '../layouts/BasicNavLayout';
import '../static/css/common.css';

const cardContent = [
	{
		src: '../static/images/technical/pulley.jpg' ,
		title: 'Pulley Installation' ,
		text: 'Pulley systems were installed on two most frequented village wells, one of which required laying of the foundation which was notably designed by the volunteers themselves. The pulley systems facilitated in lowering the villagers’ efforts by a great deal.' ,
	}	
];

export default () => (
	<React.Fragment>
		<div className="Main">
			<BasicNavLayout title="Technical" >
			    <br/><br/>
			    <div className="container">
			    	<h3 className="Heading">Technical Events</h3>
			    </div>
			    <br/><br/>			    
			    <center>
		    		{
		    			cardContent.map((content,i) => (
				      		<Card className="Card wow fadeInUp" key={i}>
						        <CardImg className="CardImg" top src={content.src} alt="Card image" />
						        <CardBody>
							        <CardTitle className="CardTitle">{content.title}</CardTitle>
							   	    <CardText className="CardText">{content.text}</CardText>
				        		</CardBody>
				      		</Card>	
				      	))
		      		}  
		      	</center>
		      	<br/><br/>
		    </BasicNavLayout>
	    </div>
	</React.Fragment>    
)

