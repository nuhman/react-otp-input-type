# react-otp-input-type


A lightweight and customizable continuous-single-input component, which can be used for OTP/pass-code style input purposes for React apps. 

<!-- [Demo](URL) -->

## Installing as a package

[![NPM](https://nodei.co/npm/react-otp-input-type.png?compact=true)](https://nodei.co/npm/react-otp-input-type/)

```
npm i react-otp-input-type
```

#### How to use?:

```jsx
import React, { useState } from 'react';
import { OTPInputField } from 'react-otp-input-type';

function App() {
  const [otp, setOtp] = useState('');
  
  return (
    <div className="App">
      <OTPInputField 
        numOfInputs = {6}
        handleChange = {setOtp}
      />

      <p>Entered value is: {otp}</p>
    </div>
  );
}
```

## Props

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type/Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>numOfInputs</td>
    <td>`number` / 4</td>
    <td>Total number of inputs</td>
  </tr>
  <tr>
    <td>isOnlyNumberAllowed</td>
    <td>`boolean` / false</td>
    <td>Flag to allow only numbers to be enetered</td>
  </tr>
  <tr>
    <td>isDisabled</td>
    <td>`boolean` / false</td>
    <td>Flag to disable all the inputs</td>
  </tr>
    <tr>
     <td>placeholder</td>
    <td>`string` / ''</td>
     <td>Placeholder value for inputs. Sample: `f76t`</code>.</td>
   </tr>
  <tr>
    <td>value</td>
    <td>`string` / ''</td>
    <td>Default value for inputs when component is loaded for first time. Sample: `f76t`</code>.</td>
  </tr>
  <tr>
    <td>maskInput</td>
    <td>`boolean` / false</td>
    <td>Mask or hide the input characters</td>
  </tr>
  <tr>
    <td>hasError</td>
    <td>`boolean` / false</td>
    <td>Flag that denotes there is an error on the input. Specific error style is applied on the inputs</td>
  </tr>
  <tr>
    <td>handleChange</td>
    <td>`Function` / (otp) => otp</td>
    <td>Function that can be used to listen to input changes. See the demo code for usage.</td>
  </tr>
  <tr>
    <td>styleObject</td>
    <td>`Object` / {}</td>
    <td>Object that contain JSX style-object which can override default input styles.</td>
  </tr>
</table>

## License

MIT