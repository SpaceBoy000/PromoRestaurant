import './ImageCard.css';

import TopImage from '../../assets/images/CardTopHolder.png';
import BottomImage from '../../assets/images/CardBottomHolder.png';

const CardItem = ({ direction = 'top', itemData}) => {
  return (
    <div className={`card-item-container ${direction}`}>
      <img src={itemData.image} alt='' className={`card-item-image ${direction}`} />
      <p className="card-item-title text-primary">{itemData.title}</p>
      <p className="card-item-subtitle text-secondary">{itemData.subtitle}</p>
    </div>
  )
}

const ImageCard = ({ direction = 'top', data }) => {
  const isTop = direction === 'top';

  return (
    <div className={`card-container ${direction}`}>
      {data.map((item, index) => (<CardItem key={index} itemData={item} direction={direction} />))}
      <div className={`background-image ${direction}`}>
        <img src={isTop ? TopImage : BottomImage} alt='back' />
      </div>
    </div>
  )
}

export default ImageCard;