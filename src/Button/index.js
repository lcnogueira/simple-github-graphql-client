import React from 'react';
import './style.css';

const Button = ({
  children,
  className,
  color = 'black',
  type = 'button',
  ...props
}) => (
  <button
    className={`${className} Button Button_${color}`}
    type={type}
    {...props}
  >
    {children}
  </button>
);

const ButtonUnobstrusive = ({
  children,
  className,
  type = 'button',
  ...props
}) => (
  <button
    className={`${className} Button_unobstrusive`}
    type={type}
    {...props}
  >
    {children}
  </button>
);

export { ButtonUnobstrusive };

export default Button;
