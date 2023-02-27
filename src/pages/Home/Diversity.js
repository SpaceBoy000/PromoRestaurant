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

      <Footer />
    </>
  );
};

export default Home;
