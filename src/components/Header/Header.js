import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, IconButton, useMediaQuery } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';
import Navigator from '../../components/Navigator/Navigator';
import Logo from '../../assets/images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

import Brand from '../../assets/images/brand.png';


const NavItem = ({ to, title, handleClick }) => {
  const location = useLocation();
  // console.log("Link: ", to, location,hash);
  return (
    <div className={clsx('drawer-nav-item', { active: location.pathname.includes(to) })} onClick={handleClick}>
      {/* <HashLink to={to} className='nav-text'>{title}</HashLink> */}
      <Link to={to} className='nav-text'>{title}</Link>
    </div>
  )
}

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 991px)');
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  return (
    <>
    <div className={clsx('header-container', { mobile : isMobile })}>
      {isMobile && (
        <IconButton onClick={handleDrawerOpen} color='inherit'>
          <FontAwesomeIcon icon={faBars} fixedWidth />
        </IconButton>
      )}

      <div className="social-container">
        <FontAwesomeIcon icon={faTwitter} fixedWidth className="social-icon" />
        <FontAwesomeIcon icon={faFacebookF} fixedWidth className="social-icon" />
        <FontAwesomeIcon icon={faInstagram} fixedWidth className="social-icon" />
        <FontAwesomeIcon icon={faWhatsapp} fixedWidth className="social-icon" />
        <FontAwesomeIcon icon={faTelegramPlane} fixedWidth className="social-icon" />
      </div>

      <Drawer
        anchor='left'
        open={open}
        onClose={handleDrawerClose}
        sx={{ backgroundColor: 'rgba(96, 96, 96, 0.07)' }}
      >
        <div className="drawer-container">
          <div className="drawer-title">
            <img src={Brand} width={35} alt='logo' />
            <p>Prom Resources</p>
          </div>

          <NavItem to='/home' title='Home' handleClick={handleDrawerClose} />
          <NavItem to='/about' title='About Us' handleClick={handleDrawerClose} />
          <NavItem to='/business' title='Our Business' handleClick={handleDrawerClose} />
          <NavItem to='/diversity' title='Diversity' handleClick={handleDrawerClose} />
          <NavItem to='/investors' title='Investors' handleClick={handleDrawerClose} />
          <NavItem to='/contact' title='Contact Us' handleClick={handleDrawerClose} />
        </div>
      </Drawer>
      
    </div>
    <div>
      <img src={Logo} alt='logo' className='app-logo' />
      {!isMobile && <Navigator />}
    </div>
    </>
  )
}

export default Header;
