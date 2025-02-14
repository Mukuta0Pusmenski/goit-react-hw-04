import { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    // Perform image search here
  };

  const handleImageClick = (image) => {
    if (image.largeImageURL) {
      setSelectedImage(image);
      setIsModalOpen(true);
    } else {
      console.error("largeImageURL відсутнє в об'єкті зображення", image);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null); // Скидання вибраного зображення
  };

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
