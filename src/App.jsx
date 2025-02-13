// App.jsx
import { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    // Виконайте пошук зображень тут
  };

  const handleImageClick = (image) => {
    // Відкрийте модальне вікно з повним зображенням
  };

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
    </div>
  );
};

export default App;

//нижній код післ того як оновиться імейдж

//// App.jsx
// import { useState } from "react";
// import styles from "./App.module.css";
// import SearchBar from "./components/SearchBar/SearchBar";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import Loader from "./components/Loader/Loader";

// const App = () => {
//   const [query, setQuery] = useState("");
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSearchSubmit = (searchQuery) => {
//     setQuery(searchQuery);
//     setIsLoading(true); // Починаємо завантаження
//     // Виконайте пошук зображень тут
//     setTimeout(() => {
//       setIsLoading(false); // Закінчуємо завантаження
//       setImages([
//         {
//           id: 1,
//           webformatURL:
//             "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//           tags: "google",
//         },
//         {
//           id: 2,
//           webformatURL:
//             "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
//           tags: "google",
//         },
//       ]);
//     }, 2000);
//   };

//   const handleImageClick = (image) => {
//     // Відкрийте модальне вікно з повним зображенням
//   };

//   return (
//     <div className={styles.App}>
//       <SearchBar onSubmit={handleSearchSubmit} />
//       <ImageGallery images={images} onImageClick={handleImageClick} />
//       {isLoading && <Loader />}
//     </div>
//   );
// };

// export default App;