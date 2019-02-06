import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '../static/images/home/nss1.jpg',
    altText: 'Slide 1',
/*    caption: 'Slide 1',
    header: 'Slide 1 Header'*/
  },
  {
    src: '../static/images/home/nss2.jpg',
    altText: 'Slide 2',
/*    caption: 'Slide 2',
    header: 'Slide 2 Header'*/
  },
  {
    src: '../static/images/home/nss3.jpg',
    altText: 'Slide 3',
/*    caption: 'Slide 2',
    header: 'Slide 2 Header'*/
  },
  {
    src: '../static/images/home/nss4.jpg',
    altText: 'Slide 4',
/*    caption: 'Slide 2',
    header: 'Slide 2 Header'*/
  },    
  {
    src: '../static/images/home/nss5.jpg',
    altText: 'Slide 5',
/*    caption: 'Slide 3',
    header: 'Slide 3 Header'*/
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;