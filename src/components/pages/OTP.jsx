import React, { useState, useRef } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { Link } from 'react-router-dom';
import LoginStyle from './LoginForm.module.css'

const LoginForm = () => {
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const inputRefs = useRef([...Array(4)].map(() => React.createRef()));

  const handleChange = (index, value) => {
    if (/^[0-9]*$/.test(value)) {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = value;
      setOtpDigits(newOtpDigits);
      if (value !== '' && index < 3) {
        inputRefs.current[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && index > 0 && otpDigits[index] === '') {
      inputRefs.current[index - 1].current.focus();
    }
  };
  return (
    <div className={LoginStyle['login-body']}>
      <div className={LoginStyle['form-container']}>
        <div className={LoginStyle['header-container']}
        >
          <div className={LoginStyle['otp-pulse']}
          ></div>
        </div>
        <div className={LoginStyle['otp-header']}>
          <Link to="/LoginForm" style={{textDecoration: 'none'}}><SlArrowLeft /></Link>
          <Link to="/OTPVerification" style={{textDecoration: 'none'}}><h1>Change number</h1></Link>
        </div>
        <div className={LoginStyle['otp-container']}>
          <div className={LoginStyle['otp-info']}
          >
            <h1>Enter authentication code</h1>
            <p>Enter the 4-digit code that we have sent via the phone number <br /> [user's phone number]</p>
          </div>
          <div className={LoginStyle['otp-input']}
          >
            {otpDigits.map((digit, index) => (
              <input
                key={index}
                className={LoginStyle['otp-num']}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={inputRefs.current[index]}
              />
            ))}
          </div>
          <div className={LoginStyle['otp-button']}>
            <button type="submit">Continue</button>
            <p>Resend code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
