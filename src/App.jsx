import { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';

const API_KEY = 'edZqyenA0fvmM1hz_PV7fn6-6khb6RbW6WMNHVkpvwA'; // Новий Unsplash Access Key

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    fetchImages(searchQuery);
  };

  const fetchImages = async (searchQuery) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&client_id=${API_KEY}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setImages(data.results);
      } else {
        console.error('No images found');
        setImages([]);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageClick = (image) => {
    if (image.urls && image.urls.full) {
      setSelectedImage(image);
      setIsModalOpen(true);
    } else {
      console.error("URLs відсутні в об'єкті зображення", image);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null); // Скидання вибраного зображення
  };

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
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
