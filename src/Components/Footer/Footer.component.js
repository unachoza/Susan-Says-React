import React from "react";
import ladies from "../../Constants/lady.constants";
import "./Footer.styles.css";

const Footer = ({ ladiesIndex }) => <div className="ladys-name">{ladies[ladiesIndex].name}</div>;
export default Footer;
