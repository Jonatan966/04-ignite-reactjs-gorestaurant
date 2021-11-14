import { FC } from 'react';
import ReactModal from 'react-modal';

interface NewModalProps {
  isOpen?: boolean;
  setIsOpen: () => void;
}

const modalStyles: ReactModal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#F0F0F5',
    color: '#000000',
    borderRadius: '8px',
    width: '736px',
    border: 'none',
  },
  overlay: {
    backgroundColor: '#121214e6',
  },
}

const Modal: FC<NewModalProps> = ({ isOpen = false, children, setIsOpen }) => {
  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={isOpen}
      ariaHideApp={false}
      style={modalStyles}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
