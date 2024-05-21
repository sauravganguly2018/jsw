import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, content }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>×</button>
        {content}
      </div>
    </div>
  );
};

export default Modal;
