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
      <img src={image.urls.full} alt={image.alt_description} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
