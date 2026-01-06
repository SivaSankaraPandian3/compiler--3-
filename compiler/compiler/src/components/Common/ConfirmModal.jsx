import React from 'react';
import './ConfirmModal.css';

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="confirm-modal-overlay">
            <div className="confirm-modal-content">
                <div className="confirm-modal-header">
                    <h3>{title || 'Confirm Action'}</h3>
                </div>
                <div className="confirm-modal-body">
                    <p>{message || 'Are you sure you want to proceed?'}</p>
                </div>
                <div className="confirm-modal-actions">
                    <button className="confirm-modal-btn cancel" onClick={onCancel}>Cancel</button>
                    <button className="confirm-modal-btn confirm" onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
