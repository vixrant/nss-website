import React from 'react';
import BasicNavLayout from '../layouts/BasicNavLayout';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';

import { Jumbotron, Container } from 'reactstrap';

import "./about.css";
import './common.css';

const posInfo = [
	{
		name: "Prof. Bagal",
		src: '../static/images/photos/bagal.jpeg',
	},
	{
		name: "Prof. Rahul Tawre",
		src: '../static/images/photos/tawre.jpeg',
	},
	{
		name: "Alisha Banz Ma'am",
		src: '../static/images/photos/bagal.jpeg',
	},
];

const SocialNss = () => (
	<div id="social-bar">
		{/* <span className="social-heading"> Social </span> */}
		<div className="social-icons">
			<a href="https://www.facebook.com/djsce.nss">
				<i className="fab fa-facebook"/>
			</a>
			<a href="https://www.instagram.com/nss_djsanghvi/">
				<i className="fab fa-instagram"/>
			</a>
			<a href="https://twitter.com/dj_nssunit?lang=en">
				<i className="fab fa-twitter"/>
			</a>
		</div>
	</div>
);

const AboutNss = () => (
	<div id="info-nss">
		<h1 className="display-5">Dummy content</h1>
		The National Service Scheme (NSS) has been enthusiastically conducting activities to help people from the past 49 years. 
		It was launched on Gandhiji's centenary year to continue his ideas of community service among the youth of our nation. 
		NSS is a student association of the youth studying in university.

		One such student organisations is DJNSS, the NSS unit of Dwarkadas J. Sanghvi college of Engineering, Vile Parle (E). 
		With a unique motto " Help, Connect, Inspire ", 
		the organisation has been helping people enthusiastically for the past 8 years and have a vision to continue ahead.

		DJNSS, has been conducting many city as well as district-level social service activities. 
		As a part of a government unit, they are permitted to adopt a village for a period of 5 years to facilitate positive impacts among rural & tribal communities. 
		DJNSS thus has adopted Ambewadi and Narpad, Dahanu.
	</div>
);

const POCard = (props) => (
	<Card key={props.key} className="Card Committee">
        <CardImg top className="CardImg" width="100%" src={props.src} alt="Card image cap" />
        <CardBody>
          <CardTitle><b>{ props.name }</b></CardTitle>
          {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText> */}
        </CardBody>
    </Card>
);

export default () => (
	<BasicNavLayout title="About" className="Main">
		<Jumbotron id="about-jumbotron">
			<h2 className="display-4 about-jumbotron-content" >
				About DJ NSS Unit
			</h2>
		</Jumbotron>
		<Container>
			<SocialNss />
			<AboutNss />
			<center>
				<h2>NSS Program Officers</h2>
				{ posInfo.map((content, i) => <POCard key={i} {...content} />) }
			</center>
		</Container>
	</BasicNavLayout>
);
