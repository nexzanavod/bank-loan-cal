import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './App.css';
import callmeImage from './assets/callme.png';


const PopupModal = ({ monthlyInstallment, onClose }) => {
    const handleCall = () => {
        // Implement your call functionality here.
        // You can use HTML <a> tag with the 'tel' protocol or other methods.
        // Example:
        window.location.href = 'tel:+1234567890';
      };
    
  return (
    <div style={{ paddingLeft: '166px' }}>
 <div className="popup-modal">
 <p style={{ color: 'blue', fontWeight: 'bold', textAlign: 'center' }}>
        Monthly Installment
      </p>
      <p style={{ textAlign: 'center' }}>RS {monthlyInstallment} /=</p>
    
      <div style={{ textAlign: 'center' }}>
      <img
  src={callmeImage}
  alt="Call Us"
  onClick={handleCall}
  style={{ cursor: 'pointer', width: '100px', height: '100px' }}
/>

</div>


      
      </div>
    </div>
   
  );
};

export default PopupModal;
