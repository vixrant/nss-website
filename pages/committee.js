import React from 'react';
import { Card, Button, CardImg, Cardname, CardTitle, CardText, CardDeck, CardSubname, CardBody } from 'reactstrap';
import { Container } from 'reactstrap';
import BasicNavLayout from '../layouts/BasicNavLayout';
import './common.css';

const infoTeam = [
	{
		src: '',
		name: 'Rohin Matthew',
		position: 'Chairperson',
	},
	{
		src: '',
		name: 'Meet Damani',
		position: 'Co-Chairperson',
	},
	{
		src: '',
		name: 'Harshit Samani',
		position: 'Co-Chairperson',
	},
	{
		src: '',
		name: 'Siddhi Solanki',
		position: 'Secretary',
	},
	{
		src: '',
		name: 'Yogesh Deshpande',
		position: 'Joint Secretary',
	},
	{
		src: '',
		name: 'Arham Mehta',
		position: 'Vice Chairperson',
	},
	{
		src: '',
		name: 'Trushita Bharucha',
		position: 'Vice Chairperson',
	},
	{
		src: '',
		name: 'Aayush Kharwal',
		position: 'Vice Chairperson',
	},
	{
		src: '',
		name: 'Shravani Salunke',
		position: 'Treasurer',
	},
	{
		src: '',
		name: 'Devansh Dalal',
		position: 'Joint Treasurer',
	},
	{
		src: '',
		name: 'Rohan Poojari',
		position: 'Events Head',
	},
	{
		src: '',
		name: 'Utsavi Sevak',
		position: 'Events Head',
	},
	{
		src: '',
		name: 'Dhruti Kuvar',
		position: 'Creatives Head',
	},
	{
		src: '',
		name: 'Pratiksha Chotalia',
		position: 'Creatives Head',
	},
	{
		src: '',
		name: 'Priyal Dani',
		position: 'Publiciy Head',
	},
	{
		src: '',
		name: 'Neha Shah',
		position: 'Publiciy Head',
	},
	{
		src: '',
		name: 'Shreya Nair',
		position: 'Editorial Head',
	},
	{
		src: '',
		name: 'Manali Salvi',
		position: 'Editorial Head',
	},
	{
		src: '',
		name: 'Maitri Gohil',
		position: 'Tech Head',
	},
	{
		src: '',
		name: 'Sanya Khare',
		position: 'Tech Head',
	},																																	
];

export default () => (
    <BasicNavLayout title="Upcoming Events" className="Main">
			    <br/><br/>
			    <div className="container">
			    	<h3 className="Heading">NSS Committee</h3>
			    </div>
			    <br/><br/>			    
			    <center className="wow fadeInUp">
		    		{
		    			infoTeam.map((content,i) => (
				      		<Card className="Card Committee my-4" key={i}>
						        <CardImg className="CardImg" top src={content.src} alt="Card image" />
						        <CardBody>
							        <CardTitle className="CardTitle">{content.name}</CardTitle>
							   	    <CardText className="CardText">{content.position}</CardText>
				        		</CardBody>
				      		</Card>	
				      	))
		      		}  
		      	</center>
		      	<br/><br/>
    </BasicNavLayout>
)
