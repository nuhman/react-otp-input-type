import React, { useEffect, useState } from 'react';
import './styles/OTPInputField.css';

import Input from './Input';

const OTPInputField = ({
  numOfInputs = 4,
  isOnlyNumberAllowed = false,
  isDisabled = false,
  maskInput = false,
  hasError = false,
  value = '',
  handleChange = (value) => value,
  placeholder = '',
  styleObject,
}) => {

  // constants
  const MAX_NUMBER_INPUTS = numOfInputs;
  const MIN_LENGTH_INPUT = 1;
  const MAX_LENGTH_INPUT = 1;
  // const LETTER_REGEX = /^[A-Za-z]+$/;
  const NUMBER_REGEX = /^[0-9]+$/;
  const ALL_REGEX = /^.+$/;
  const INPUT_TYPE = maskInput ? 'password' : (isOnlyNumberAllowed ? 'tel' : 'text');
  const OTP_VALUE_ARR = typeof value === 'string' ? value.split('').slice(0, MAX_NUMBER_INPUTS) : [];
  const OTP_PLACEHOLDER_ARR = typeof placeholder === 'string' ? placeholder.split('').slice(0, MAX_NUMBER_INPUTS) : [];

  // store
  const [inputLettersArray, setInputLettersArray] = useState(
    Array.from({ length: MAX_NUMBER_INPUTS }, (v, i) => {
      if (!OTP_VALUE_ARR.length || i > OTP_VALUE_ARR.length - 1) {
        return '';
      }
      return OTP_VALUE_ARR[i];
    })
  );

  const [inputPlaceholderArray, ] = useState(
    Array.from({ length: MAX_NUMBER_INPUTS }, (v, i) => {
      if (!OTP_PLACEHOLDER_ARR.length || i > OTP_PLACEHOLDER_ARR.length - 1) {
        return '';
      }
      return OTP_PLACEHOLDER_ARR[i];
    })
  );

  const [inputRefs, ] = useState(
    Array.from({ length: MAX_NUMBER_INPUTS }, () => React.createRef())
  );

  // hooks
  useEffect(() => {
    if (Array.isArray(inputLettersArray)) {
      handleChange(inputLettersArray.join(''));
    }
  }, [inputLettersArray, handleChange]);
  
  // Priority: isOnlyNumberAllowed > allCharactersAllowed
  const [selectedRegex, ] = useState(isOnlyNumberAllowed ? NUMBER_REGEX : ALL_REGEX);
  

  const focusNextInput = (index) => {
    if (index >= MAX_NUMBER_INPUTS - 1 || index < -1) 
      return;

    return inputRefs[index + 1].current.focus();
  }

  const focusPrevInput = (index) => {
    if (index <= 0) 
      return;

    return inputRefs[index - 1].current.focus();
  }

  const handleInputValue = (event, index) => {
    const inputValue = event?.target?.value;
    if (selectedRegex.test(inputValue)) {
      setInputLettersArray([
        ...inputLettersArray.slice(0, index),
        inputValue,
        ...inputLettersArray.slice(index + 1)
      ]);
      focusNextInput(index);
    }
  }

  const handlekeyDown = (event, index) => {
    if (
      event.keyCode === 8 || event.key === 'Backspace' || 
      event.keyCode === 46 || event.key === 'Delete'
    ) {
      const value = inputLettersArray[index];
      setInputLettersArray([
        ...inputLettersArray.slice(0, index),
        '',
        ...inputLettersArray.slice(index + 1)
      ]);
      if (!value) {
        focusPrevInput(index);
      }
    } else if (
      event.keyCode === 37 || event.key === 'ArrowLeft'
    ) {
      focusPrevInput(index);
    } else if (
      event.keyCode === 39 || event.key === 'ArrowRight'
    ) {
      focusNextInput(index);
    }
  };

  const handleOnPaste = (event, index) => {
    event.preventDefault();

    const pastedData = (event?.clipboardData?.getData('text/plain') || '').slice(0, MAX_NUMBER_INPUTS - index).split('');
    const isOverMaxLength = (index + pastedData.length) >= MAX_NUMBER_INPUTS;

    if (isOverMaxLength) {
      setInputLettersArray([
        ...inputLettersArray.slice(0, index),
        ...pastedData,
      ].slice(0, MAX_NUMBER_INPUTS));
    } else {
      setInputLettersArray([
        ...inputLettersArray.slice(0, index),
        ...pastedData,
        ...inputLettersArray.slice(pastedData.length + 1)
      ].slice(0, MAX_NUMBER_INPUTS));
    }
    
    focusNextInput(index + pastedData.length - 2);
  }

  const handleInputFocusOnClick = (event) => event.target.select();

  const renderInputs = () => {
    return Array.from({ length: MAX_NUMBER_INPUTS }, (v, i) => {
      return (
        <Input
          type={INPUT_TYPE}
          key={`otp-single-input-${i}`}
          index={i}
          minLength={MIN_LENGTH_INPUT}
          maxLength={MAX_LENGTH_INPUT}
          inputRef={inputRefs[i]}
          value={inputLettersArray[i]}
          handleInputFocus={handleInputFocusOnClick}
          handleInputValue={handleInputValue}
          handlekeyDown={handlekeyDown}
          handleOnPaste={handleOnPaste}
          placeholder={inputPlaceholderArray[i]}
          isDisabled={isDisabled}
          hasError={hasError}
          styleObject={styleObject}
        />
      );
    });
  }

  return (
    <div id="word-input-container">
        {renderInputs()}
    </div>
  );
};

export default OTPInputField;
