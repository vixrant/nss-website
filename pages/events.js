import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import BasicNav from '../layouts/BasicNav';
/*import Footer from '../components/Footer';*/
import styles from './common.css';

const cardContent = [
	{
		src: '../static/images/events/tree_plantation.png' , 
		title: 'Tree Plantation' ,
		text: 'With pollution levels that refuse to decline, it was time to do something that will help make a difference. And what better solution than planting trees? So the NSS unit of D.J Sanghvi College of Engineering organised its very first event of the Academic year 2018 - 2019: The Tree Plantation Drive! The event saw over a hundred enthusiastic volunteers who came without any qualms on the rainy Sunday morning at 8 am at Unit 4 of Aarey Colony. Equipped with pick axes, shovels and saplings, the energetic volunteers set to the task of planting over 120 saplings, not letting the rain dampen their unbound spirit.',
	},
	{
		src: '../static/images/events/orphanage.png' , 
		title: 'Orphanage Visit' ,
		text: 'True joy lies in bringing happiness to others without expecting anything in return. Following this line of thought, the NSS unit of D.J Sanghvi College organised an Orphanage Visit. The children at orphanages: (1) Sneha Sadan (Jogeshwari east), (2) Sneha Sadan (Jogeshwari west) and (3) Bosco Boys (Borivali) welcomed the volunteers with enthusiastic smiles and boundless energy.Their ceaseless spirit and exuberance managed to keep us at our toes. The fact that they wanted to give something back to the volunteers - be it drawings or a dance choreographed by them - left us completely amazed. They taught us something valuable, just as we did, for them.' ,
	},
	{
		src: '../static/images/events/charity_drive.png' , 
		title: 'Annual Charity Drive' ,
		text: 'With the aim of giving a better exposure to some of the unheard artists and underprivileged kids of our society the NSS unit had organised its "Annual Charity Drive" from 10th August to 25th August. It showcased a variety of products from 3 different institutions made by differently abled people from chocolates to raakhis to various pouches, folders etc. Products from the following organisations were collected: 1) Punarvas Special, 2) VDIS School for Mentally Challenged, 3) Indian Mouth &amp; Foot Painting Artists. The drive aimed at helping these strong-spirited people make a living for themselves. The charity drive was a very big success. The unit was very happy and extremely grateful to the students, teachers and other staff members for their contributions towards this noble cause.' ,
	}, 
	{
		src: '../static/images/events/animal_welfare.png' ,
		title: 'Animal Welfare Seminar' ,
		text: 'Miss Archana Shah from Foundation of Mumbai Animals presided over the seminar with its chief motive being “Changing one’s lifestyle for the betterment of animal lives”. She urged all the students to abstain the usage of animal products as a statement of fashion or style and introduce the utilization of khadi and other such material in their daily lives. This was followed by a presentation which included the methods, equipment, medicine names and cure needed for the healing a wound or a limb of an animal, and was extremely helpful. The organization emphasized the need of helping these beautiful souls in need and how to help one just by the usage of meagre lifestyle items made of animal skin.' ,
	},
	{
		src: '../static/images/events/kerela.jpg' ,
		title: 'Care For Kerela' ,
		text: 'In one of the worst floods that hit Kerala this year, the massive loss of lives, property and infrastructure was unimaginable. With over ten lakh people living in temporary shelters and a lot more evacuated from their homes, the people of Kerala were relentlessly battling the helplessness of their situation when the odds were against God’s own country. In a bid to give them at least an inkling of relief, the NSS unit of D J Sanghvi College organized a drive which was held from 22 to 25 August 2018, in order to collect the basic and necessary items of livelihood. We would like to inform all the people who donated, that the packages have reached Alleppey district, Kerala successfully.' ,
	},	
	{
		src: '../static/images/events/anti_plastic.jpg' ,
		title: 'Anti-Plastic Drive' ,
		text: 'Now-a-days, whether we buy clothes, groceries or books, the shopkeepers only use plastic bags for the items. It takes around 700 years for the plastic to start decompose and taking the seriousness of the adverse effects of plastic on the environment, the Government of India recently banned usage of plastic bags and certain other products made of plastic. Following this wise decision of the government, the NSS unit of DJ Sanghvi College of Engineering arranged an “Anti-plastic Campaign” to spread the awareness about the ill effects of usage of plastic products and promoting the use of other environment friendly alternatives.' ,
	},
	{
		src: '../static/images/events/beach_cleanup.jpg' ,
		title: 'Beach Clean-Up Drive' ,
		text: '“The time is always right to do what is right”. Keeping in mind, this quote of the famous Martin Luther King Jr, the NSS unit of D J Sanghvi College organised a beach clean-up drive on Juhu beach on a 7 a.m. sunday morning. This was following the seventh day of idol immersion of the Ganesh Utsav festival. Many people find it cumbersome to wake up early in the morning just to clean-up the beaches yet the volunteers were very enthusiastic and worked diligently with the purpose of making a significant difference. The results were visible when volunteers from another college appreciated the unit’s efforts publicly on a social media platform. The NSS unit lastly, extended a heartfelt thanks to all those who participated and made a conscious effort to keep the city clean after which the volunteers were dispersed.' ,
	},
	{
		src: '../static/images/events/gender_sens.jpg' ,
		title: 'Gender Sensitization Seminar' ,
		text: 'NSS was formally launched on 24th September 1969. To celebrate this auspicious day, which is so close to our hearts DJNSS organised an interactive session on topics like Human Trafficking and Gender Sensitization. With the number of rape and abduction cases increasing each year, there was an utter need of educating the crowd about these topics. The speaker Mr Nishant Jha, a victim of Human Trafficking himself, tackled these sensitive subjects in a surprisingly creative way. Highlighting the ways to prevent such situations and giving solutions on how we can reduce this disturbing rate, he truly inspired the crowd.' ,
	},
	{
		src: '../static/images/events/fire_drill.jpg' ,
		title: 'Fire Safety Drill' ,
		text: 'The NSS Unit of D.J. Sanghvi College Of Engineering organised a seminar in collaboration with SVKM on 27th September 2018 by (speaker name). Speaker covered a wide range of procedures to prevent casualties in the time of extreme fires. Video clips of past and recent fire cases were presented for better understanding. He also shared some safety measures and important tips in case of fire flames and about the fire drill requirements and how it should be taken seriously. With the help of volunteers he demonstrated the process of operating fire extinguishers on the college terrace. There were over 45 teachers and 20 NSS volunteers who actively participated in the seminar.' ,
	},
	{
		src: '../static/images/events/fdd.jpg' ,
		title: 'Food Donation Drive' ,
		text: 'DJ NSS had organised a Food donation drive as a gratitude to the luxury of food that we enjoy every day By donating food to the needy, the unit embraced a beautiful feeling of gratitude at the end. The food was donated on the streets of Borivali, Andheri and at Shanti Daan, Borivali.' ,
	},
	{
		src: '../static/images/events/ncd.jpg' ,
		title: 'Newspaper Collection Drive' ,
		text: '“Don’t throw it away, Recycle for another day” And all our volunteers came forward to make it true. A Sunday morning which could’ve been spent by most, sleeping. A big bunch of newspapers and piles of scraps that probably would have just laid around somewhere, being of no use to anyone.  DJNSS volunteers, striving to work for the betterment of the society, put in maximum efforts in the Newspaper Collection Drive and collected these piles. The volunteers couldn’t be thanked enough for all of their efforts.' ,
	},	
	{
		src: '../static/images/home/nss3.jpg' ,
		title: 'NSS Orientation' ,
		text: 'We are all Arjuna in our own journey of life. - Dr. Hari Vasudevan. With the Orientation, NSS was ready to embark on its new journey of helping and bringing about change, which would have not been possible without, the support of the Program Officers, Mr. Vyankatesh Bagal and Mr. Rahul Taware who guided the unit throughout their  journey in the past years and would continue to do so the coming years. A special thanks was given to Chief Guest, Mr. Pranav Panchal, who threw light upon the importance of NSS in every institution. The principal of the college gave the volunteers an insight on how NSS helps one become a successful person with fair principles and morals. The committee thanked the volunteers for their participation in the previously conducted events and promised them a great year ahead in NSS.' ,
	},	
	{
		src: '../static/images/events/thanksgiving.png' ,
		title: 'Thanksgiving' ,
		text: "Appreciation, Affection and Affinity are the three crucial A's of our lives. DJNSS took a day out to express these 3As to people we usually fail to notice in our daily hustle bustle. These people are the bus conductors, drivers, firemen, the policemen. Also, the unit didn’t fail to look out on our cleaning staff, who are truly an essential part of our college life. The volunteers interacted with them and had tears to hear the hardships which they have to face every day. These public workers gave the unit small tips on how the society can be kept more safe, sound and clean. By personally giving a thank you badge, DJNSS pledged to help them back in every way they could." ,
	},	
	{
		src: '../static/images/events/stem_cell.png' ,
		title: 'Stem Cell Donation Drive' ,
		text: 'The NSS Unit of D.J. Sanghvi college, in co-ordination with the Marrow Donor Registry (India), successfully carried out the Stem Cell Donation drive within the college premises on the 18th January, 2019. A day before the drive, Dr. Praveen Clement had educated the students of each class of the college about Stem Cell Donation and encouraged everyone to join in for the good cause. On the day of the drive, a team of 6 people from the MDRI arrived to carry out the procedure. The donors filled up the form, went to the registration desk, collected empty vials from there and headed to the nurses, who filled up the vial with 4 mL of donor blood. It was a very safe procedure. The total number of donors pledging their stem cells in D.J. Sanghvi were greater than most drives that the MDRI officials had carried out in the recent days.' ,
	},	
	{
		src: '' ,
		title: '' ,
		text: '' ,
	},									
];

export default () => (
	<React.Fragment>
	<div className={styles.Main}>
	    <BasicNav title="Events" /> 
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

    </div>
	</React.Fragment>    
)
