import './SectionTitle.css';
import Point from '../../assets/images/Point.png';

const SectionTitle = ({ title }) => {
  return (
    <div className="title-container">
      <p className="title">{title}</p>
      <img src={Point} alt='' className='title-icon' />
    </div>
  )
}

export default SectionTitle;