import logo from '../images/g39.png';
import { IoEyeSharp } from 'react-icons/io5';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginStyle from './LoginForm.module.css'


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={LoginStyle['login-body']}>
    <div className= {LoginStyle['form-container']}>
    <div className={LoginStyle['header-container']}
    >
      <img src={logo} className={LoginStyle['logos']}
      alt="Logo" />
      <div className={LoginStyle['pulse']}
      ></div>

      <div className={LoginStyle['text-form']}
      >
        <h1>HEAN</h1>
        <p>Health Electronic Alert Network</p>
      </div>
    </div>
    <form action="">
      <h2>Username</h2>
      <input className={LoginStyle['fill']}
      type="email" id="email" required="" placeholder="hello@example.com" />
      <div className={LoginStyle['password-div']}
      >
        <h2>Password</h2>
        <Link to="/OTPVerification">Forgot Password</Link>
      </div>
      <div className={LoginStyle['password-input']}
      >
        <input
          className={LoginStyle['fill']}
          type={showPassword ? 'text' : 'password'}
          id="password"
          required=""
          placeholder="Password"
        />
        <IoEyeSharp className={LoginStyle['eye-icon']}
        onClick={togglePasswordVisibility} />
      </div>
      <div className={LoginStyle['checkbox']}
      >
        <input type="checkbox" />Keep me sign in
      </div>
      <button className={LoginStyle['button-submit']}
      type="submit">
        Login
      </button>
      <p>
        Dont have an account? <Link to="/RegisterForm">Sign Up Here</Link>
      </p>
    </form>
  </div>
    </div>
  );
};

export default LoginForm;
