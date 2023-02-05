import { HashLink } from 'react-router-hash-link';
import './Navigator.css';

const Navigator = () => {
  return (
    <div className="navigator-container">
      <HashLink smooth to='#home' className="nav-item active">Home</HashLink>
      <HashLink smooth to='#about' className="nav-item">About Us</HashLink>
      <HashLink smooth to='#business' className="nav-item">Our Business</HashLink>
      <HashLink smooth to='#diversity' className="nav-item">Diversity</HashLink>
      <HashLink smooth to='#investors' className="nav-item">Investors</HashLink>
      <HashLink smooth to='#contact' className="nav-item">Contact Us</HashLink>
    </div>
  )
}

export default Navigator;