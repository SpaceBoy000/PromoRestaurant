import { TextField, useMediaQuery } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navigator from '../../components/Navigator/Navigator';
import ImageBanner from '../../components/ImageBanner/ImageBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Divider from '../../components/Divider/Divider';
import ImageCard from '../../components/ImageCard/ImageCard';
import './Home.css';

// import Logo from '../../assets/images/logo.png';
// import GreenMap from '../../assets/images/GreenMap.png';
// import MissionLeaf from '../../assets/images/MissionLeaf.png';
// import AboutBanner from '../../assets/images/AboutBanner.png';
// import BannerLeaf from '../../assets/images/BannerLeaf.png';
import Card11 from '../../assets/images/Card1-1.png';
import Card12 from '../../assets/images/Card1-2.png';
import Card13 from '../../assets/images/Card1-3.png';
import Card21 from '../../assets/images/Card2-1.png';
import Card22 from '../../assets/images/Card2-2.png';
import Card23 from '../../assets/images/Card2-3.png';
import DiversityLeaf from '../../assets/images/DiversityLeaf.png';
import ContactBanner from '../../assets/images/ContactBanner.png';
import ContactLeaf from '../../assets/images/ContactLeaf.png';
// import GoogleMap from '../../assets/images/map.png';
import Submit from '../../assets/images/Submit.png';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
// import Map from '../../components/GoogleMap/map';
import mapStyles from './mapStyles'
// import * as parkData from "./data/parkData.json";

import Map from "../../components/GoogleMap/map";

import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker
} from "react-google-maps";

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

// function Map() {
//   const [selectedPark, setSelectedPark] = useState(null);

//   useEffect(() => {
//     const listener = e => {
//       if (e.key === "Escape") {
//         setSelectedPark(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);


//   return (
//     <GoogleMap
//       defaultZoom={19}
//       defaultCenter={{ lat: 43.6561, lng: -79.3802}}
//       options={{ styles: mapStyles }}
//     >
//       {/* {parkData.features.map(park => (
//         <Marker
//           key={park.properties.PARK_ID}
//           position={{
//             lat: park.geometry.coordinates[1],
//             lng: park.geometry.coordinates[0]
//           }}
//           onClick={() => {
//             setSelectedPark(park);
//           }}
//           icon={{
//             url:  "https://img.icons8.com/color/48/000000/map-pin.png",
//             scaledSize: new window.google.maps.Size(50, 50)
//           }}
//         />
//       ))}

//       {selectedPark && (
//         <InfoWindow
//           onCloseClick={() => {
//             setSelectedPark(null);
//           }}
//           position={{
//             lat: selectedPark.geometry.coordinates[1],
//             lng: selectedPark.geometry.coordinates[0]
//           }}
//         >
//           <div>
//             <h2>{selectedPark.properties.NAME}</h2>
//             <p>{selectedPark.properties.DESCRIPTIO}</p>
//           </div>
//         </InfoWindow>
//       )} */}
//     </GoogleMap>
    
//   );
// }

// const MyMapComponent = withScriptjs(
//   withGoogleMap(Map)
// );


const ContactUs = () => {
  const isMobile = useMediaQuery('(max-width: 991px)');

  const [status, setStatus] = useState('');
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    msg: ''
  })

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {

    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }));
    console.log("value: ", values);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending: ", values);
    emailjs.send('service_a39czbe', 'template_9mfelbe', values, 'UF_ghTdkSdFk2bFL-')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          name: '',
          email: '',
          phone: '',
          msg: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  const mapStyles = {
    width: '100%',
    height: '100%',
  };
  
  let url = "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY + "&v=3.exp&libraries=geometry,drawing,places";
  
  return (
    <>
      <Header />

      <section id='contact'>
        <div className="contact-banner">
          <img src={ContactBanner} alt='' className="banner-image" />
          <img src={ContactLeaf} alt='leaf' className="contact-banner-leaf" />
        </div>
        {status && renderAlert()}

        <div className="container section-container">
          <SectionTitle title='Contact Us' />
          <div className="contact-wrapper">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  placeholder='NAME'
                  className="form-input"
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  placeholder='EMAIL'
                  className="form-input"
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  placeholder='PHONE'
                  className="form-input"
                  name='phone'
                  value={values.phone}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder='MESSAGE'
                  className="form-input"
                  name='msg'
                  value={values.msg}
                  onChange={handleChange}
                />
                <button className="submit-button" type='submit'>
                  <img src={Submit} alt='submit' />
                  <p className="submit-button-text">Submit</p>
                </button>
              </form>
              </div>
            <div className="contact-map">
              <Map/>
              {/* <img src={GoogleMap} alt='map' /> */}
              {/* <Map
                google={undefined}
                center={{ lat: 40.7484, lng: -73.9857 }}
                height="300px"
                zoom={15}
              /> */}
                
                {/* <MyMapComponent
                    googleMapURL={url}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                /> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>your message submitted successfully</p>
  </div>
)

export default ContactUs;
