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
      width: '90%', // Обмежуємо максимальну ширину
      height: '90%', // Обмежуємо максимальну висоту
      overflow: 'hidden', // Запобігаємо прокрутці модального вікна
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
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
      <button onClick={onRequestClose} style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
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
          maxHeight: '100%',
          objectFit: 'contain'
        }}
      />
    </Modal>
  );
};

export default ImageModal;
