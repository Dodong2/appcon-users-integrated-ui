import { IoEyeSharp } from "react-icons/io5";
import LoginStyle from "./LoginForm.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={LoginStyle['login-body']}>
      <div className={LoginStyle["form-container"]}>
        <div className={LoginStyle["register-headers"]}>
          <div className={LoginStyle["register-pulse"]}></div>
        </div>

        <form action="" className={LoginStyle['reg-form']}>
          <div className={LoginStyle["register-text"]}>
            <h1 className={LoginStyle["new-account-text"]}>
              New <br />
              Account
            </h1>
          </div>
          <div className={LoginStyle["name-header"]}>
            <h2>First Name</h2>
            <h2>Last Name</h2>
          </div>
          <div className={LoginStyle["name-form"]}>
            <input
              className={LoginStyle["fill"]}
              type="text"
              id="email"
              required=""
              placeholder="Juan"
            />
            <input
              className={LoginStyle["fill"]}
              type="text"
              id="email"
              required=""
              placeholder="Dela Cruz"
            />
          </div>

          <h2>Username</h2>
          <input
            className={LoginStyle["fill"]}
            type="text"
            id="email"
            required=""
            placeholder="hello@example.com"
          />
          <div className={LoginStyle["password-div"]}>
            <h2>Create Password</h2>
          </div>
          <div className={LoginStyle["password-input"]}>
            <input
              className={LoginStyle["fill"]}
              type={showPassword ? "text" : "password"}
              id="password"
              required=""
              placeholder="Password"
            />
            <IoEyeSharp
              className={LoginStyle["eye-icon"]}
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className={LoginStyle["password-div"]}>
            <h2>Re-type Password</h2>
          </div>
          <div className={LoginStyle["password-input"]}>
            <input
              className={LoginStyle["fill"]}
              type={showPassword ? "text" : "password"}
              id="password"
              required=""
              placeholder="Confirm Password"
            />
            <IoEyeSharp
              className={LoginStyle["eye-icon"]}
              onClick={togglePasswordVisibility}
            />
          </div>
          <h2>Mobile No.</h2>
          <input
            className={LoginStyle["fill"]}
            type="tel"
            id="phone"
            required=""
            placeholder="Phone Number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <div className={LoginStyle["checkbox"]}>
            <input type="checkbox" /> Keep me sign in
          </div>
          <button className={LoginStyle["button-submit"]} type="submit">
            Sign Up
          </button>
          <p>
            Already have an account? <Link to="/LoginForm">Sign in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
