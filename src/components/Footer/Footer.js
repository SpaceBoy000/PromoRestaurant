import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTelegramPlane, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

import FooterBanner from '../../assets/images/FooterBanner.png';
import FooterLogo from '../../assets/images/FooterLogo.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-background" />
      <img src={FooterBanner} alt='banner' className="footer-image" />
      <div className="footer-content">
        <img src={FooterLogo} alt='logo' className="footer-logo" />

        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing Lorem <br/>
          ipsum dolor sit amet, consectetuer adipiscing Lorem ipsum dolor <br/>
          sit amet, consectetuer adipiscing
        </p>

        <div className="footer-social-container">
          <FontAwesomeIcon icon={faTwitter} fixedWidth className="footer-social-icon" />
          <FontAwesomeIcon icon={faFacebookF} fixedWidth className="footer-social-icon" />
          <FontAwesomeIcon icon={faInstagram} fixedWidth className="footer-social-icon" />
          <FontAwesomeIcon icon={faWhatsapp} fixedWidth className="footer-social-icon" />
          <FontAwesomeIcon icon={faTelegramPlane} fixedWidth className="footer-social-icon" />
        </div>

        <p className="footer-text">
          © Company Name 2020. All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer;