import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

import BasicNavLayout from '../layouts/BasicNavLayout';
import './common.css';

const cardContent = [
	{
		src: '' , 
		title: 'International Yoga Day' ,
		text: 'On 21st June, at the Kalina campus of Mumbai University, 250 students witnessed International Yoga Day where they were taught Yoga by 75 NSS volunteers who were selected by the university and trained under the direction of instructors at Kaivalyadham Yoga and Health Institute. The chief guest of the event Hon’ble Shri. Prakash Javadekar, Minister of HRD, Government of India shared his thoughts on the importance and benefits of practising yoga daily. He proposed that these representatives of each institution would be then asked to lead a Yoga Camp at their respective colleges to continue this fitness initiative.',
	},
	{
		src: '' , 
		title: 'Convention on Improving Concentration' ,
		text: 'The secretary of the Ramakrishna mission in Midnapur, West Bengal, and Swami Amartyananda was the speaker of the event. The event was also graced by the presence of the Principal and the Vice Principal of the Nagindas Khandwala college, as well as the District Coordinator of NSS, Professor Pranav Panchal and one of the area coordinator of NSS, Professor Rajesh Bombe. Within a few minutes, Swamiji had the audience totally mesmerized and they were listening with rapt attention. All the students found this convention to be highly informative and they were enlightened with Swamiji’s wisdom. The volunteers dispersed after a word of thanks from the staff and were given refreshments and certificates of participation.',
	},
	{
		src: '' , 
		title: 'Anti-Plastic Campaign' ,
		text: 'Now-a-days, whether we buy clothes, groceries or books, the shopkeepers only use plastic bags for the items. It takes around 700 years for the plastic to start decompose and taking the seriousness of the adverse effects of plastic on the environment, the Government of India recently banned usage of plastic bags and certain other products made of plastic. Following this wise decision of the government, the NSS unit of DJ Sanghvi College of Engineering arranged an “Anti-plastic Campaign” to spread the awareness about the ill effects of usage of plastic products and promoting the use of other environment friendly alternatives.',
	},
	{
		src: '' , 
		title: 'Gender Sensitisation Seminar' ,
		text: 'NSS was formally launched on 24th September 1969. To celebrate this auspicious day, which is so close to our hearts DJNSS organised an interactive session on topics like Human Trafficking and Gender Sensitization. With the number of rape and abduction cases increasing each year, there was an utter need of educating the crowd about these topics. The speaker Mr Nishant Jha, a victim of Human Trafficking himself, tackled these sensitive subjects in a surprisingly creative way. Highlighting the ways to prevent such situations and giving solutions on how we can reduce this disturbing rate, he truly inspired the crowd.',
	},
	{
		src: '' , 
		title: 'Bhajan Sandhya' ,
		text: "Colleges from all over Mumbai participated enthusiastically in the remembrance of Father of the Nation, Mr Mohandas Karamchand Gandhi on his birthday. Volunteers marched from Churchgate station to the Gateway of India in a rally whilst holding posters containing teachings of the man himself. A stage had been created in front of the Gateway where soulful bhajans on Mahatma Gandhi and Lal Bahadur Shastri were being sung highlighting all their principles and achievements. The volunteers returned home with Gandhiji's learnings in their mind and peace in their hearts.",
	},
	{
		src: '' , 
		title: 'Walkathon to raise Awareness' ,
		text: 'This initiative was anchored by AmbaGopal Foundation, a charitable organisation by Mr Harish Shetty alongside with TATA Memorial Hospital. The event started at 7 a.m. All the volunteers participating in the event were provided with t-shirts. It began on an auspicious note with a prayer and lighting of the diya by the dignitaries. Markham show by students of the institute was performed. Posters and banners were distributed amongst the volunteers. The main aim of the 3.6km long walk from Shivaji Park, Dadar was to come together and achieve a future, in which we get agricultural products free of harmful pesticides, chemicals and fertilizers. This will help to preserve the help of our current and future generations.',
	},
	{
		src: '' , 
		title: 'Youth Parliament' ,
		text: '',
	},						
];

export default () => (
	<React.Fragment>
		<div className="Main">
			<BasicNavLayout title="Events" >
			    <br/><br/>
			    <div className="container">
			    	<h3 className="Heading">University Events</h3>
			    </div>
			    <br/><br/>			    
			    <center className="wow fadeInUp">
		    		{
		    			cardContent.map((content,i) => (
				      		<Card className="Card" key={i}>
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