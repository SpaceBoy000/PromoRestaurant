import './Divider.css';
import Division from '../../assets/images/Division.png';

const Divider = ({ align = 'left' }) => {
  return (
    <div className='divider-container'>
      <img src={Division} alt='' className={`divider-image ${align}`} />
    </div>
  )
}

export default Divider;