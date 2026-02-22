import "./index.css";

const Modal = ({ isOpen, onClose, children }) => {
  const handleClick = (e) => {
    if (e.target == e.currentTarget) onClose();
  };
  if (!isOpen) return null;
  return (
    <div className="overlay" onClick={handleClick}>
      <div className="modal-section">{children}</div>
    </div>
  );
};

export default Modal;
