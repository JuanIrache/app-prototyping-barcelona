import React, { useState, useEffect } from 'react';
import '../style/Header.scss';

const Header = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  return (
    <header className="Header">
      <h1 className={visible ? 'show' : ''}>App Prototyping Barcelona</h1>
      <h3 className={visible ? 'show' : ''}>
        <span>Let me create the Minimum Viable Product (MVP) of your next startup</span>
      </h3>
    </header>
  );
};

export default Header;
