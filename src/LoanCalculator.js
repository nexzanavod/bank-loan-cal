import React, { useState } from 'react';
import PopupModal from './PopupModel'; // Import the PopupModal component

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [repaymentDuration, setRepaymentDuration] = useState('');
  const [monthlyInstallment, setMonthlyInstallment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
  const [isButtonVisible, setIsButtonVisible] = useState(true); // State for the button visibility

  const calculateMonthlyInstallment = () => {
    // Implement your loan calculation logic here.
    const principal = parseFloat(loanAmount);
    const rate = 0.05; // 5% interest rate (adjust as needed)
    const duration = parseInt(repaymentDuration);
    const interest = (principal * rate * duration) / 12;
    const installment = (principal + interest) / duration;
    setMonthlyInstallment(installment.toFixed(2));
    setIsModalOpen(true); // Open the modal after calculation
    setIsButtonVisible(false); // Hide the button after calculation
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setIsButtonVisible(true); // Show the button when the modal is closed
  };

  const handleCall = () => {
    // Implement your call functionality here.
    // Example:
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div>
      <div style={{ paddingTop: '148px', paddingLeft: '149px' }}>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          style={{
            borderRadius: '10px',
            backgroundColor: '#FFDE59',
            color: 'black',
            border: 'none',
            outline: 'none',
            height: '20px',
            fontSize: '18px',
            textAlign: 'center',
            fontWeight:'bold'
          }}
        />
      </div>

      <div style={{ paddingTop: '60px', paddingLeft: '149px' }}>
        <input
          type="number"
          value={repaymentDuration}
          onChange={(e) => setRepaymentDuration(e.target.value)}
          style={{
            borderRadius: '10px',
            backgroundColor: '#FFDE59',
            color: 'black',
            border: 'none',
            outline: 'none',
            height: '20px',
            fontSize: '18px',
            textAlign: 'center',
            fontWeight:'bold'
          }}
        />
      </div>

      <div style={{ paddingTop: '24px', paddingLeft: '213px' }}>
        {isButtonVisible && (
          <button
            onClick={calculateMonthlyInstallment}
            style={{
              borderRadius: '10px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              outline: 'none',
              height: '39px',
              fontSize: '18px',
              textAlign: 'center',
              transition: 'background-color 0.3s, color 0.3s',
              cursor: 'pointer',
              fontWeight:'bold'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'yellow';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'blue';
              e.target.style.color = 'white';
            }}
          >
            Calculate
          </button>
        )}
      </div>

      {/* Render the modal when isModalOpen is true */}
      {isModalOpen && (
        <PopupModal
          monthlyInstallment={monthlyInstallment}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default LoanCalculator;
