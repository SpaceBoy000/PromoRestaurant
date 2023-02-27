import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigator.css';

const Navigator = () => {
  return (
    <div className="navigator-container">
      <Link to='/home' className="nav-item active">Home</Link>
      <Link to='/about' className="nav-item">About Us</Link>
      <Link to='/business' className="nav-item">Our Business</Link>
      <Link to='/diversity' className="nav-item">Diversity</Link>
      <Link to='/investors' className="nav-item">Investors</Link>
      <Link to='/contact' className="nav-item">Contact Us</Link>
    </div>
  )
}

export default Navigator;