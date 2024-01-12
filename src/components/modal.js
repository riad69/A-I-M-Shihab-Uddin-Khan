import React, { useState } from 'react';
import '../styles/modal.css';

const Modal = ({ showModal, handleClose }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setSelectedFiles(files);
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">File Upload</h1>
            <button type="button" className="modal-close" onClick={handleClose}>Close</button>
          </div>
          <div className="modal-body">
            <div className="input-group">
              <input type="file" id="fileInput" onChange={handleFileChange} multiple />
              <label htmlFor="fileInput">Choose Files</label>
            </div>
            <h4>Uploaded Files:</h4>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>
                  {file.name} ({file.type})
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={() => alert('Implement your Done functionality')}>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
