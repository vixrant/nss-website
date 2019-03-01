import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import styles from './common.css';
import BasicNavLayout from '../layouts/BasicNavLayout';

const cardContent = [
	{
		src: '../static/images/technical/pulley.jpg' ,
		title: 'Pulley Installation' ,
		text: 'Pulley systems were installed on two most frequented village wells, one of which required laying of the foundation which was notably designed by the volunteers themselves. The pulley systems facilitated in lowering the villagers’ efforts by a great deal.' ,
	}	
];

export default () => (
	<React.Fragment>
		<div className={styles.Main}>
			<BasicNavLayout title="Technical" >
			    <br/><br/>
			    <center>
		    		{
		    			cardContent.map((content,i) => (
				      		<Card className={styles.Card} key={i}>
						        <CardImg className={styles.CardImg} top src={content.src} alt="Card image" />
						        <CardBody>
							        <CardTitle className={styles.CardTitle}>{content.title}</CardTitle>
							   	    <CardText className={styles.CardText}>{content.text}</CardText>
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

