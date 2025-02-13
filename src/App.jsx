import { useState, useEffect } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://pixabay.com/api/?q=${query}&page=1&key=your_api_key`
        );
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        setImages(data.hits);
        setError(null);
      } catch (error) {
        setError("Failed to load images. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query]);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setError(null);
  };

  const handleImageClick = (image) => {
    // Відкрийте модальне вікно з повним зображенням
  };

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
    </div>
  );
};

export default App;