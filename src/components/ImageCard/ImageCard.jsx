// ImageCard.jsx
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={styles.card} onClick={() => onImageClick(image)}>
      <img src={image.webformatURL} alt={image.tags} className={styles.image} />
    </div>
  );
};

export default ImageCard;
