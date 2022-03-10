import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { OTPInputField } from '../components';

const stories = storiesOf('OTPInputField Module', module);

stories.add('App', () => {

    const [otp, setOtp] = useState('');

    const handleOTPChange = (val) => {
        setOtp(val);
    }
    
    return (
        <div>
            <OTPInputField 
                numOfInputs={5}
                handleChange={handleOTPChange}
            />
            <p>OTP - is : {otp}</p>
        </div>
    );
});
