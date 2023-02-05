import './ImageBanner.css';

const ImageBanner = ({ image, children }) => {
  return (
    <div className="banner-container">
      <img src={image} alt='banner' className="banner-image" />
      <div className="content">
        { children }
      </div>
    </div>
  )
}

export default ImageBanner;