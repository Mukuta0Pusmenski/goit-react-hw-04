import { useState } from 'react';
import styles from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
