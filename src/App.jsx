import { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';

const API_KEY = 'm7VpIulhYuqJcmrdPt8_Z2ewSUJfZ08bhvd6TZdl8-Q'; // Новий Access Key

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
      const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(searchQuery)}`);
      console.log('API Response Status:', response.status); // Логування статусу відповіді
      const responseText = await response.text();
      console.log('Response Text:', responseText); // Логування тексту відповіді
      if (response.status === 400) {
        console.error('Invalid or missing API key');
        throw new Error('Invalid or missing API key');
      }
      const data = JSON.parse(responseText);
      console.log('Fetched Data:', data); // Логування отриманих даних
      if (data.hits && data.hits.length > 0) {
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
