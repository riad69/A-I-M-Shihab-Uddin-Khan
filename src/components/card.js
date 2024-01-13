import React, { useState } from "react";
import { LuPaperclip } from "react-icons/lu";
import { PiChatsTeardrop } from "react-icons/pi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { LuFileStack } from "react-icons/lu";
import photo1 from '../assets/photo-1.jpg';
import photo2 from '../assets/photo-2.jpeg';
import photo3 from '../assets/photo-3.jpeg';
import photo4 from '../assets/photo-4.jpeg';
import Modal from "./modal";

export const Card = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [uploadedFilesCount, setUploadedFilesCount] = useState(0);



  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUploadedFilesCount(selectedFile.length);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFile(files);
    setUploadedFilesCount(files.length);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('File uploaded successfully:', data);
          setUploadedFilesCount(prevCount => prevCount + 1);
          handleCloseModal();
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
    } else {
      console.warn('Please select a file before uploading.');
    }
  };

  return (
    <div className='card'>
      <div className='first-row'>
        <div className='one'>
          <img src={photo1} className='images' alt='Client' />
          <p>Client Name</p>
        </div>
        <div className='one'>
          <img src={photo2} className='images' alt='Sadik Istiak' />
          <p>Sadik Istiak</p>
        </div>
      </div>
      <div className='second-row'>
        <div className='one'>
          <LuFileStack className='logos' />
          <p>Lorem ipsum dolor sit amet curn ..</p>
        </div>
        <div className='two'>
          <FaClipboardList className='logos' />
          <p>1/2</p>
        </div>
      </div>
      <div className='three-row'>
        <img src={photo3} className='images' alt='Image 3' />
        <img src={photo4} className='images' alt='Image 4' />
        <p>12+</p>
        <PiChatsTeardrop className='logos' />
        <p>15</p>
        <div>
          <div className="flex">
            <LuPaperclip className='logos' onClick={handleShowModal} />
            <p>{uploadedFilesCount}</p>
          </div>
          <Modal showModal={showModal} handleClose={handleCloseModal}>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
          </Modal>
        </div>
        <FaRegCalendarDays className='logos' />
        <p>30-12-2022</p>
      </div>
    </div>
  );
}
