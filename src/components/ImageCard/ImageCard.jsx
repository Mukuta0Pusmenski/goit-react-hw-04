import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  const { urls, alt_description } = image;

  if (!urls || !urls.small) {
    console.error("Image URLs are missing", image);
    return null;
  }

  return (
    <div className={styles.card} onClick={() => onImageClick(image)}>
      <img src={urls.small} alt={alt_description} className={styles.image} />
    </div>
  );
};

export default ImageCard;
