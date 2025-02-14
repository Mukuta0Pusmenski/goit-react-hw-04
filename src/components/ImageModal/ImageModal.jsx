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

  if (!image || !image.largeImageURL) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false} // Не приховувати основний вміст для прикладів
    >
      <img src={image.largeImageURL} alt={image.tags} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
