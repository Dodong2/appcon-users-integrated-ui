import logo from '../images/g39.png';
import { IoEyeSharp } from 'react-icons/io5';
import { useState } from 'react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='login-body'>
      <div className="form-container">
        <div className="header-container">
          <img src={logo} className="logo" alt="Logo" />
          <div className="pulse"></div>

          <div className="text">
            <h1>HEAN</h1>
            <p>Health Electronic Alert Network</p>
          </div>
        </div>
        <form action="">
          <h2>Username</h2>
          <input className="fill" type="text" id="email" required="" placeholder="hello@example.com" />
          <div className="password-div">
            <h2>Password</h2>
            <a href="/OTP">Forgot Password</a>
          </div>
          <div className="password-input">
            <input
              className="fill"
              type={showPassword ? 'text' : 'password'}
              id="password"
              required=""
              placeholder="Password"
            />
            <IoEyeSharp className="eye-icon" onClick={togglePasswordVisibility} />
          </div>
          <div className="checkbox">
            <input type="checkbox" /> <p>Keep me sign in</p>
          </div>
          <button className="button-submit" type="submit">
            Login
          </button>
          <p>
            Dont have an account? <a href="/RegisterForm">Sign Up Here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
