import React from 'react';
import './styles/Input.css';


const Input = ({
  index,
  type,
  isDisabled,
  minLength,
  maxLength,
  inputRef,
  value,
  placeholder,
  hasError,
  handleInputFocus,
  handleInputValue,
  handlekeyDown,
  handleOnPaste,
  styleObject,
}) => {

  const isValidStyleObject = typeof styleObject === 'object';

  return (
    <input
      className={`form-control ${hasError ? 'form-error' : 'form-control-solid'}`}
      disabled={isDisabled}
      type={type}
      minLength={minLength}
      maxLength={maxLength}
      ref={inputRef}
      value={value}
      placeholder={placeholder}
      onFocus={handleInputFocus}
      style={isValidStyleObject ? styleObject : undefined}
      onChange={event => handleInputValue(event, index)}
      onKeyDown={event => handlekeyDown(event, index)}
      onPaste={event => handleOnPaste(event, index)}
    />
  );
};

export default Input;
