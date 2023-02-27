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


const Home = () => {
  const isMobile = useMediaQuery('(max-width: 991px)');

  return (
    <>
      <Header />
      <section id='home'>
          {/* <img src={Logo} alt='logo' className='app-logo' />
          {!isMobile && <Navigator />} */}
        <div className="container home-container">
          
          <p className="home-caption">
            <span className="text-primary">Bringing Joy of </span>
            <span className="text-secondary">Food</span>
          </p>
          <p className="home-sub-caption text-primary">
            Quality Products. Great Flavours
          </p>
        </div>
        <ImageBanner image={GreenMap}>
          <p className="home-banner-title">Growing Food & Franchise Business</p>
          <p className="home-banner-subtitle text-primary">nationwide</p>
        </ImageBanner>
      </section>

      <section id='mission'>
        <div className="container section-container">
          <SectionTitle title='Our Mission' />
          <img src={MissionLeaf} alt='' className="mission-leaf" />
          <p className='section-content'>
            Growing franchising businesses, focusing on great tasting Zfood and exceptional customer service while
            giving back to our community.
            We aim to be financially successful through great people consistently delivering outstanding food, drinks
            and service in an inviting atmosphere, making every guest loyal. We are always open to add more brands,
            restaurants and franchises to our family. Please contact our business relations team for any inquiry..
          </p>
          <div className="mission-growth text-primary">
            <span>Growth&nbsp;</span>
            <span className='ampersand text-secondary'>&</span>
            <span>&nbsp;Expansion</span>
          </div>
          <Divider />
          <p className="mission-growing text-secondary">
            <span>We are </span>
            <span className="text-primary">Growing!</span>
          </p>
          <p className="mission-extend text-primary">
            We are expanding - Proven concept,<br />
            Excellent Support and Great People!
          </p>
          <div className='find-button'>
            <span className='text-secondary'>Find out </span>
            <span className='text-primary'>More</span>
          </div>
        </div>
      </section>

      {/* <section id='about'>
        <div className="about-banner">
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

      <section id='business'>
        <div className="container section-container">
          <SectionTitle title='Our Business' />
          <ImageCard data={businessCardData} />
          <Divider />
        </div>
      </section>

      <section id='diversity'>
        <div className="container section-container">
          <SectionTitle title='Diversity' />
          <p className="section-content">
            Our Principles & Beliefs, the guiding values at PROM RESOURCES INC, state that “We believe in the sanctity
            of the individual, the value of diversity and inclusion, and in treating people with kindness, respect, and
            understanding.” Our culture is founded on respecting and valuing every person, including but not limited to
            differences in gender, race, ethnic origin, religion, sexual orientation, ability, or age.
          </p>
          <img src={DiversityLeaf} alt='' className="diversity-leaf" />
          <p className="section-content">
            As a hospitality & franchising company, the goal for our companies and our team is to cultivate a welcoming, safe, and
            inclusive environment that celebrates diverse backgrounds and provides equitable access to opportunity.
            We deliver on this by ensuring everyone is trained, understands, and is held accountable for the role they
            play in making our restaurants a place where everyone is valued for who they are and what they bring to the table.
          </p>
          <div className="inline-divider" />
          <Divider align='right' />
        </div>
      </section>

      <section id='investors'>
        <div className="container section-container">
          <SectionTitle title='Investors' />
          <ImageCard data={investorCardData} direction='bottom' />
          <p className="section-content text-center my-40">
            Our mission is to be one of the fastest growing restaurant <br/>companies and franchises, with portfolioof
            leading <br/> and differentiated restaurant concepts.
          </p>
          <Divider />
        </div>
      </section>

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

      <Footer /> */}
    </>
  );
};

export default Home;
