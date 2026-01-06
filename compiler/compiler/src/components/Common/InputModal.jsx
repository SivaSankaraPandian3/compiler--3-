import React, { useState } from 'react';
import './ConfirmModal.css'; // Reuse existing styles for consistency

const InputModal = ({ isOpen, title, message, onSubmit, onCancel }) => {
    const [inputValue, setInputValue] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <div className="confirm-modal-overlay">
            <div className="confirm-modal-content">
                <div className="confirm-modal-header">
                    <h3>{title}</h3>
                </div>
                <div className="confirm-modal-body">
                    <p>{message}</p>
                    <textarea
                        className="confirm-modal-textarea"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter your input here (one value per line)..."
                        rows={5}
                        autoFocus
                    />
                </div>
                <div className="confirm-modal-actions">
                    <button className="confirm-modal-btn cancel" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="confirm-modal-btn confirm" onClick={handleSubmit}>
                        Run with Input
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InputModal;
