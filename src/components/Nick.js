import React from 'react';
import "../App.css"
import logo from '../mintLogo2.png';

const Nick = () => {
  return (
    <div>
      <h1>Nick</h1>
      <p>This is the Nick page!</p>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Nick;