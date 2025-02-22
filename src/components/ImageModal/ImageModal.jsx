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
      border: 'none', // Прибираємо стандартну рамку
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Додаємо тінь
      borderRadius: '10px', // Округлюємо краї
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '90vw', // Обмежуємо максимальну ширину вікна
      maxHeight: '90vh', // Обмежуємо максимальну висоту вікна
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
        backgroundColor: '#ff6347',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        fontWeight: 'bold',
        fontSize: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease',
      }} onMouseEnter={(e) => e.target.style.backgroundColor = '#e5533d'}
         onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6347'}
      >Close</button>
      <img
        src={image.urls.full}
        alt={image.alt_description}
        style={{
          maxWidth: '100%',
          maxHeight: '80vh', // Забезпечуємо вміщення зображення у вікно
          objectFit: 'contain',
        }}
      />
    </Modal>
  );
};

export default ImageModal;
