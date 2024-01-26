

import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header>
      <Link to="/home/kareem/simulazione/simulazione/src/routes/rout.tsx">
        <img src="logo.png" alt="Logo" />
      </Link>
      <h1>movie webapp</h1>
    </header>
  );
};

export default Header;

