import React from 'react';
import { Card, Button, CardImg, Cardname, CardTitle, CardText, CardDeck, CardSubname, CardBody } from 'reactstrap';
import { Container } from 'reactstrap';
import BasicNavLayout from '../layouts/BasicNavLayout';


const infoTeam = [
	{
		src: '/static/images/photos/rohin.jpeg',
		name: 'Rohin Matthew',
		position: 'Chairperson',
	},
	{
		src: '/static/images/photos/meet.jpg',
		name: 'Meet Damani',
		position: 'Co-Chairperson',
	},
	{
		src: '/static/images/photos/harshit.jpg',
		name: 'Harshit Samani',
		position: 'Co-Chairperson',
	},
	{
		src: '/static/images/photos/siddhi.jpg',
		name: 'Siddhi Solanki',
		position: 'Secretary',
	},
	{
		src: '/static/images/photos/yogesh.jpeg',
		name: 'Yogesh Deshpande',
		position: 'Joint Secretary',
	},
	{
		src: '/static/images/photos/arham.jpg',
		name: 'Arham Mehta',
		position: 'Vice Chairperson',
	},
	{
		src: '/static/images/photos/trushita.jpg',
		name: 'Trushita Bharucha',
		position: 'Vice Chairperson',
	},
	{
		src: '/static/images/photos/aayush.jpg',
		name: 'Aayush Kharwal',
		position: 'Vice Chairperson',
	},
	{
		src: '/static/images/photos/shravani.jpg',
		name: 'Shravani Salunke',
		position: 'Treasurer',
	},
	{
		src: '/static/images/photos/devansh.jpg',
		name: 'Devansh Dalal',
		position: 'Joint Treasurer',
	},
	{
		src: '/static/images/photos/rohan.jpg',
		name: 'Rohan Poojari',
		position: 'Events Head',
	},
	{
		src: '/static/images/photos/utsavi.jpg',
		name: 'Utsavi Sevak',
		position: 'Events Head',
	},
	{
		src: '/static/images/photos/dhruti.jpg',
		name: 'Dhruti Kuvar',
		position: 'Creatives Head',
	},
	{
		src: '/static/images/photos/pratiksha.jpg',
		name: 'Pratiksha Chotalia',
		position: 'Creatives Head',
	},
	{
		src: '/static/images/photos/priyal.jpg',
		name: 'Priyal Dani',
		position: 'Publiciy Head',
	},
	{
		src: '/static/images/photos/neha.jpg',
		name: 'Neha Shah',
		position: 'Publiciy Head',
	},
	{
		src: '/static/images/photos/shreya.jpg',
		name: 'Shreya Nair',
		position: 'Editorial Head',
	},
	{
		src: '/static/images/photos/manali.jpeg',
		name: 'Manali Salvi',
		position: 'Editorial Head',
	},
	{
		src: '/static/images/photos/maitri.jpg',
		name: 'Maitri Gohil',
		position: 'Tech Head',
	},
	{
		src: '/static/images/photos/sanya.jpg',
		name: 'Sanya Khare',
		position: 'Tech Head',
	},																																	
];

export default () => (
    <BasicNavLayout title="Committee" className="Main">
			    <br/><br/>
			    <div className="container">
			    	<h3 className="Heading">NSS Committee</h3>
			    </div>
			    <br/><br/>			    
			    <center>
		    		{
		    			infoTeam.map((content,i) => (
				      		<Card className="Card Committee wow fadeInUp my-4" key={i}>
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
