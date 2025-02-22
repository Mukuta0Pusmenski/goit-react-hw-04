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
      padding: '20px', // Додаємо бар'єр навколо картинки
      backgroundColor: '#fff',
      position: 'relative',
      border: 'none', // Прибираємо стандартну рамку
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Додаємо тінь
      borderRadius: '10px', // Округлюємо краї
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
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
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <button onClick={onRequestClose} style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        backgroundColor: '#fff',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}>Close</button>
      <img
        src={image.urls.full}
        alt={image.alt_description}
        style={{
          maxWidth: '100%',
          maxHeight: '80vh',
          objectFit: 'contain',
        }}
      />
    </Modal>
  );
};

export default ImageModal;
