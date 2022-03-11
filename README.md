# react-otp-input-type


A lightweight and customizable continuous-single-input component, which can be used for OTP/pass-code style input purposes for React apps. 

![image](https://user-images.githubusercontent.com/15177381/157714570-0cc1395f-5816-43d0-b56e-7dab88e84acd.png)

[Working Demo](https://stackblitz.com/edit/react-otp-input-type?file=src/App.js)

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
    <td><code>number</code> / 4</td>
    <td>Total number of inputs</td>
  </tr>
  <tr>
    <td>isOnlyNumberAllowed</td>
    <td><code>boolean</code> / false</td>
    <td>Flag to allow only numbers to be enetered</td>
  </tr>
  <tr>
    <td>isDisabled</td>
    <td><code>boolean</code> / false</td>
    <td>Flag to disable all the inputs</td>
  </tr>
    <tr>
     <td>placeholder</td>
    <td><code>string</code> / ''</td>
     <td>Placeholder value for inputs. Sample: `f76t`</code>.</td>
   </tr>
  <tr>
    <td>value</td>
    <td><code>string</code> / ''</td>
    <td>Default value for inputs when component is loaded for first time. Sample: `f76t`</code>.</td>
  </tr>
  <tr>
    <td>maskInput</td>
    <td><code>boolean</code> / false</td>
    <td>Mask or hide the input characters</td>
  </tr>
  <tr>
    <td>hasError</td>
    <td><code>boolean</code> / false</td>
    <td>Flag that denotes there is an error on the input. Specific error style is applied on the inputs</td>
  </tr>
  <tr>
    <td>handleChange</td>
    <td><code>Function</code> / (otp) => otp</td>
    <td>Function that can be used to listen to input changes. See the demo code for usage.</td>
  </tr>
  <tr>
    <td>styleObject</td>
    <td><code>Object</code> / {}</td>
    <td>Object that contain JSX style-object which can override default input styles.</td>
  </tr>
</table>

## License

MIT
