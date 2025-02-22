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
      maxWidth: '90%', // Обмежуємо максимальну ширину
      maxHeight: '90%', // Обмежуємо максимальну висоту
      overflow: 'hidden', // Додаємо прокрутку для великих зображень
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', // Темний фон
    },
  };

  if (!image || !image.urls || !image.urls.full) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <button onClick={onRequestClose} style={{ position: 'absolute', top: 10, right: 10 }}>Close</button>
      <img
        src={image.urls.full}
        alt={image.alt_description}
        style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
      />
    </Modal>
  );
};

export default ImageModal;
