import React from 'react';
import './Footer.css';

const Footer = () => {
  
  const handleRedirect = () => {
    // Replace 'your_instagram_username' with your actual Instagram username
    window.open('https://www.instagram.com/neeraj.bharadva?utm_source=qr', '_blank');
  };

  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>NewsApp &copy; 2024</p>
      <p id="os">
        owned by <span onClick={handleRedirect} style={{ cursor: 'pointer' }}>Niraj Bharadva</span>
        <img src="img.jpg" alt="Instagram" onClick={handleRedirect} style={{ cursor: 'pointer', verticalAlign: 'middle', marginLeft: '5px' }} /> && Bansi Ujeniya
      </p>
    </footer>
  );
};

export default Footer;
