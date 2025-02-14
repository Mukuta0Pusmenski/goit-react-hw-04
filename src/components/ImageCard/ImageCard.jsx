import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  const { largeImageURL, webformatURL, tags } = image;

  if (!largeImageURL) {
    console.error("largeImageURL is null", image);
    return null;
  }

  return (
    <div className={styles.card} onClick={() => onImageClick(image)}>
      <img src={webformatURL} alt={tags} className={styles.image} />
    </div>
  );
};

export default ImageCard;
