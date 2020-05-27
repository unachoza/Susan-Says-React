import React from 'react';
import ladies from 'Constants/constants.js';
import 'Components/Footer/Footer.styles.css';

const Footer = ({ ladiesIndex }) => (
  <div>
    <div className="ladys-name">This lady is {ladies[ladiesIndex].name}</div>
  </div>
);
export default Footer;
