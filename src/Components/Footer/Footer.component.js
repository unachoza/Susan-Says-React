import React from 'react';
import ladies from 'Constants/lady.constants.js';
import 'Components/Footer/Footer.styles.css';

const Footer = ({ ladiesIndex }) => (
  <div className="ladys-name">
    This lady is {ladies[ladiesIndex].name}
    <br></br>
    {ladies[ladiesIndex].bioBlurb}
  </div>
);
export default Footer;
