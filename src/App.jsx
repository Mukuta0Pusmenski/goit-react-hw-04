import { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const API_KEY = 'edZqyenA0fvmM1hz_PV7fn6-6khb6RbW6WMNHVkpvwA'; // Новий Unsplash Access Key

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(''); // Новий стан для помилок

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    setError(''); // Скидання помилки перед новим пошуком
    fetchImages(searchQuery, 1);
  };

  const fetchImages = async (searchQuery, page) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&client_id=${API_KEY}&page=${page}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setImages(prevImages => page === 1 ? data.results : [...prevImages, ...data.results]);
      } else {
        setError('No images found'); // Встановлення помилки, якщо зображення не знайдені
        if (page === 1) setImages([]);
      }
    } catch (error) {
      setError('Error fetching images'); // Встановлення помилки при помилці запиту
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

  const loadMoreImages = () => {
    setPage(prevPage => {
      const newPage = prevPage + 1;
      fetchImages(query, newPage);
      return newPage;
    });
  };

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={loadMoreImages} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
