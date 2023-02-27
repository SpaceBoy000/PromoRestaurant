import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';
import './Navigator.css';

const Navigator = () => {
  const location = useLocation();
  console.log("Header Location: ", location);
  return (
    <div className="navigator-container">
      <Link to='/home' className={clsx('nav-item', { active: location.pathname.includes('home') })}>Home</Link>
      <Link to='/about' className={clsx('nav-item', { active: location.pathname.includes('about') })}>About Us</Link>
      <Link to='/business' className={clsx('nav-item', { active: location.pathname.includes('business') })}>Our Business</Link>
      <Link to='/diversity' className={clsx('nav-item', { active: location.pathname.includes('diversity') })}>Diversity</Link>
      <Link to='/investors' className={clsx('nav-item', { active: location.pathname.includes('investors') })}>Investors</Link>
      <Link to='/contact' className={clsx('nav-item', { active: location.pathname.includes('contact') })}>Contact Us</Link>
    </div>
  )
}

export default Navigator;