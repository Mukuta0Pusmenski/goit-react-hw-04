import Modal from 'react-modal';

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // Перевірка наявності зображення та його поля largeImageURL
  if (!image || !image.largeImageURL) {
    return null; // Не рендерити модальне вікно, якщо зображення немає або поле largeImageURL відсутнє
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={image.largeImageURL} alt={image.tags} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
