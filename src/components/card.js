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
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
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

                <Modal showModal={showModal} handleClose={handleCloseModal} />
            </div>
            <p>25</p>
            <FaRegCalendarDays  className='logos'/>
            <p>30-12-2022</p>
            
        </div>
    </div>
  )
}
