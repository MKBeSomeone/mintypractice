// About.js
import React from 'react';
import "../App.css"
import logo from '../mintLogo2.png';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home page!</p>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Home;