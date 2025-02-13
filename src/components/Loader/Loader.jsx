// Loader.jsx
import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader size={50} color="#00BFFF" />
    </div>
  );
};

export default Loader;
