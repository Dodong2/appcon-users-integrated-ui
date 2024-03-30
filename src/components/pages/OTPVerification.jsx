import { useState } from 'react';
import { FaHashtag } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import LoginStyle from './LoginForm.module.css'

const OTPVerification = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleChange = (event) => {
    const input = event.target.value;
    if (/^[0-9]*$/.test(input)) {
      setMobileNumber(input);
    }
  };
    return (
    <div className={LoginStyle['login-body']}>
      <div className={LoginStyle['form-container']}
      >
        <div className={LoginStyle['header-container']}
        >
          <div className={LoginStyle['otp-pulse']}
          ></div>
        </div>
      <div className={LoginStyle['otp-container']}
      >
        <div className={LoginStyle['otp-info']}
        >
          <h1>OTP Verification</h1>
          <p>Please enter your mobile number</p>
        </div>
        <div className={LoginStyle['otp-input']}
        >
        <FaHashtag  className={LoginStyle['icons-hashtag']}/>
        <input
            className={LoginStyle['mobile-tel']}
            type="tel"
            placeholder="Mobile number"
            value={mobileNumber}
            onChange={handleChange}
            maxLength={11}
          />
        </div>
        <div className={LoginStyle['otp-button']}>
        <Link to="/OTP" style={{textDecoration: 'none'}}>
        <button type="submit">Continue</button>
        </Link>
        <Link to="/LoginForm" style={{textDecoration: 'none'}}>
        <p>Back</p>
        </Link>
        </div>
      </div>
          
      </div>
    </div>
  );
};

export default OTPVerification;
