import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>&copy; {currentYear} Your App Name</div>
    </footer>
  );
}

export default Footer;
