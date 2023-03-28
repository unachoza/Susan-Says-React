import React from 'react';
import './button.styles.css'

const Button = ({ children, ...props }) => <button {...props}>{children}</button>;

export default Button;
