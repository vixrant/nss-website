import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import BasicNavLayout from '../layouts/BasicNavLayout';
import styles from './common.css';

const cardContent = [
	{
		src: '../static/images/camp/shramdan.jpg' ,
		title: 'Road Building' ,
		text: "Two stretches of roads were built, one of which included a lane which hadn't been repaired in 15 years." ,
	},	
	{
		src: '../static/images/camp/medical_camp.jpg' ,
		title: 'Medical Camp' ,
		text: 'A medical camp was conducted in Ambewadi which included basic health check-ups, proper diet suggestions, a dispensation of five months’ worth of medication and distribution of handmade reusable cotton pads.' ,
	},	
	{
		src: '../static/images/camp/mahiti_dhoot.jpg' ,
		title: 'Mahiti Dhoot' ,
		text: 'An awareness program about the various schemes developed by the government for the needy was conducted. The unit was able to cover almost the whole of Narpad village.' ,
	},	
	{
		src: '../static/images/camp/wall_painting.jpg' ,
		title: 'Wall Painting' ,
		text: 'A big stretch of wall adjacent to the Narpad beach was painted to emphasize on the Swachh Bharat Abhiyan movement. The volunteers helped in the beautification of the village walls by the designs of Warli.' ,
	},	
	{
		src: '../static/images/camp/sports_day.jpg' ,
		title: 'Sports Day' ,
		text: 'To instil the spirit of sportsmanship in the young students of Narpad and Ambewadi, a Sports Day in the government schools of the villages was conducted. ' ,
	},	
	{
		src: '../static/images/camp/art_craft.jpg' ,
		title: 'Arts and Craft Workshop' ,
		text: 'The children of primary school in Ambewadi were taught brush painting and collage making with an aim of exposing them to various forms of art.' ,
	},	
	{
		src: '../static/images/camp/beach_cleanup.jpg' ,
		title: 'Beach Clean-up' ,
		text: 'Dahanu Beach is emerging as a leading tourist point in the state of Maharashtra and to keep its famous beaches pristine, a beach clean-up drive was organised.' ,
	},	
	{
		src: '../static/images/camp/weeding.jpg' ,
		title: 'Weeding' ,
		text: 'Due to an overgrowth of itch spreading weed in the playground of primary school of Narpad, the children had abandoned the area. Weed cutting event was organized to clean the spot.' ,
	},	
	{
		src: '../static/images/camp/street_play.jpg' ,
		title: 'Street Play and Dance' ,
		text: 'Plays highlighting the importance of cleanliness, education and ill effects of alcoholism were presented in the primary schools and streets of Narpad and Ambewadi. ' ,
	},									
];

export default () => (
	<React.Fragment>
		<div>
		    <BasicNavLayout title="CAMP">
			    <Jumbotron>
			        <h2 className="display-4">NSS Camp</h2>
			        <hr className="my-2" />		        
			        <p className="lead">As a part of a government unit, the unit is permitted to adopt a village for a period of 5 years to facilitate positive impacts among rural & tribal communities. DJNSS thus has adopted Ambewadi and Narpad, Dahanu. In the year of 2018-2019 NSS was responsible for conducting the following events in these villages.</p>	    	
			    </Jumbotron>
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
