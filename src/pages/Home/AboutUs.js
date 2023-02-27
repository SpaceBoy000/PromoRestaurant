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


const AboutUs = () => {
  const isMobile = useMediaQuery('(max-width: 991px)');

  return (
    <>
      <Header />

      <section id='about'>
        <div className="about-banner">
          {/* <img src={Logo} alt='logo' className='app-logo' />
          {!isMobile && <Navigator />} */}
          <img src={AboutBanner} alt='' className="banner-image" />
          <img src={BannerLeaf} alt='leaf' className="about-banner-leaf" />
        </div>
        <div className="container section-container">
          <SectionTitle title='About Us' />
          <p className='section-content'>
            Growing franchising businesses, focusing on great tasting Zfood and exceptional customer service while
            giving back to our community.
            We aim to be financially successful through great people consistently delivering outstanding food, drinks
            and service in an inviting atmosphere, making every guest loyal. We are always open to add more brands,
            restaurants and franchises to our family. Please contact our business relations team for any inquiry..
          </p>
          <div className="inline-divider" />
          <Divider align='right' />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
