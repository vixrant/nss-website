import React from 'react';
import BasicNavLayout from '../layouts/BasicNavLayout';

import { Jumbotron } from 'reactstrap';

import "./about.css";

const AboutNss = () => (
	<div>
		sdasd
	</div>
);

export default () => (
	<BasicNavLayout title="About" >
		<Jumbotron id="about-jumbotron">
			<h2 className="display-4 about-jumbotron-content" >
				About DJ NSS Unit
			</h2>
		</Jumbotron>
		<AboutNss />
	</BasicNavLayout>
);
