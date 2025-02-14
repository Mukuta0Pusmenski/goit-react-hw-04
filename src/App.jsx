import { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';

const API_KEY = 'edZqyenA0fvmM1hz_PV7fn6-6khb6RbW6WMNHVkpvwA'; // Використовуй свій Access Key
const BASE_URL = 'https://pixabay.com/api/';

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
      const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(searchQuery)}&image_type=photo&orientation=horizontal&safesearch=true`);
      const data = await response.json();
      console.log('Fetched Data:', data); // Логування отриманих даних
      if (data.hits.length > 0) {
        setImages(data.hits);
      } else {
        console.error('No images found');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
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
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
