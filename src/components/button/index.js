import React from 'react';
import './styles.css'

function Button({ buttonText, className, ...restProps }) {
  return (
      <button 
        className={`btn ${className}`} 
        {...restProps}
      >{buttonText}</button>
  );
}

export default Button;
