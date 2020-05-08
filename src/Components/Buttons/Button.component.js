import React from 'react';
import 'Components/Buttons/button.styles.css'

const Button = ({ children, ...props }) => <button {...props}>{children}</button>;

export default Button;
