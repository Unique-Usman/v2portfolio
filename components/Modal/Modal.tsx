import styles from './Modal.module.scss';
interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        {children}
        <button className={styles.button} onClick={onClose}>
          <svg viewBox="0 0 24 24">
            {/* SVG content here */}
          </svg>
        </button>
      </div>
    </>
  );
};

export default Modal;
