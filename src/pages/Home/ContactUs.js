import { TextField, useMediaQuery } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navigator from '../../components/Navigator/Navigator';
import ImageBanner from '../../components/ImageBanner/ImageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Divider from '../../components/Divider/Divider';
import ImageCard from '../../components/ImageCard/ImageCard';
import './Home.css';

import Logo from '../../assets/images/logo.png';
import GreenMap from '../../assets/images/GreenMap.png';
import MissionLeaf from '../../assets/images/MissionLeaf.png';
import AboutBanner from '../../assets/images/AboutBanner.png';
import BannerLeaf from '../../assets/images/BannerLeaf.png';
import Card11 from '../../assets/images/Card1-1.png';
import Card12 from '../../assets/images/Card1-2.png';
import Card13 from '../../assets/images/Card1-3.png';
import Card21 from '../../assets/images/Card2-1.png';
import Card22 from '../../assets/images/Card2-2.png';
import Card23 from '../../assets/images/Card2-3.png';
import DiversityLeaf from '../../assets/images/DiversityLeaf.png';
import ContactBanner from '../../assets/images/ContactBanner.png';
import ContactLeaf from '../../assets/images/ContactLeaf.png';
import GoogleMap from '../../assets/images/map.png';
import Submit from '../../assets/images/Submit.png';

const businessCardData = [
  {
    image: Card11,
    title: 'Franchise Restaurant Chains',
    subtitle: ''
  },
  {
    image: Card12,
    title: 'Food Supply',
    subtitle: ''
  },
  {
    image: Card13,
    title: 'Digital Marketing',
    subtitle: ''
  }
];

const investorCardData = [
  {
    image: Card21,
    title: 'Coming Soon!',
    subtitle: 'Press Release'
  },
  {
    image: Card22,
    title: 'Coming Soon!',
    subtitle: 'Press Release'
  },
  {
    image: Card23,
    title: 'Coming Soon!',
    subtitle: 'Press Release'
  },
]


const ContactUs = () => {
  const isMobile = useMediaQuery('(max-width: 991px)');

  return (
    <>
      <Header />
      
      <section id='contact'>
        <div className="contact-banner">
          <img src={ContactBanner} alt='' className="banner-image" />
          <img src={ContactLeaf} alt='leaf' className="contact-banner-leaf" />
        </div>
        <div className="container section-container">
          <SectionTitle title='Contact Us' />
          <div className="contact-wrapper">
            <div className="contact-form">
              <TextField 
                fullWidth
                placeholder='NAME'
                className="form-input"
              />
              <TextField
                fullWidth
                placeholder='EMAIL'
                className="form-input"
              />
              <TextField
                fullWidth
                placeholder='PHONE'
                className="form-input"
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder='MESSAGE'
                className="form-input"
              />
              <div className="submit-button">
                <img src={Submit} alt='submit' />
                <p className="submit-button-text">Submit</p>
              </div>
            </div>
            <div className="contact-map">
              <img src={GoogleMap} alt='map' />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
