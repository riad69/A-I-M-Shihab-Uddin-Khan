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
    const [selectedFile, setSelectedFile] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
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
            handleCloseModal();  // Close the modal after successful upload
          })
          .catch(error => {
            console.error('Error uploading file:', error);
            // Handle the error, display a message, etc.
          });
      } else {
        // Handle the case where no file is selected
        console.warn('Please select a file before uploading.');
      }
    };
  return (
    <div className='card'>
        <div className='first-row'>
            <div className='one'>
                <img src={photo1} className='images'/>
                <p>Client Name</p>
            </div>
            <div className='one'>
                <img src={photo2} className='images'/>
                <p>Sadik Istiak</p>
            </div>

        </div>
        <div className='second-row'>
            <div className='one'>
                <LuFileStack className='logos'/>
                <p>Lorem ipsum dolor sit amet curn ..</p>
            </div>
            <div className='two'> 
                <FaClipboardList className='logos'/>
                <p>1/2</p>
            </div>
        </div>
        <div className='three-row'>
            <img src={photo3} className='images'/>
            <img src={photo4} className='images'/>
            <p>12+</p>
            <PiChatsTeardrop className='logos'/>
            <p>15</p>
            <div>
            <LuPaperclip className='logos' onClick={handleShowModal} />
            <Modal showModal={showModal} handleClose={handleCloseModal}>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
            </Modal>
            <p>25</p>
            </div>
            <FaRegCalendarDays  className='logos'/>
            <p>30-12-2022</p>
            
        </div>
    </div>
  )
}
