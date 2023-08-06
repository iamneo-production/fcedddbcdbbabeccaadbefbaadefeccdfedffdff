import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="copyright">
        &copy; {currentYear} Google Notes App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
