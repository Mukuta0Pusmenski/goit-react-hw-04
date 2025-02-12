import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import Loader from "./components/Loader/Loader";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    // Виконай пошук зображень тут
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && !isLoading && <LoadMoreBtn />}
      {isModalOpen && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
