import React from 'react';
import './styles.css'

function InputField({ placeholder, className, ...restProps}) {
  return (
      <input 
        type="text" 
        placeholder={placeholder} 
        className={`input ${className}`}
        {...restProps}
      />
  );
}

export default InputField;
