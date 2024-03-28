import personSign from "../images/personSign.svg";
import { Link } from 'react-router-dom';
const SignUpBtn = () => {
  return (
    <>
      <div className="signUp-btn">
      <Link to="/LoginForm"  className="no-textdeco">
          <button className="custom-button">
          <img src={personSign}/>
          <span>Signup</span>
          </button>
          </Link>
          </div>
    </>
  );
  
};

export default SignUpBtn;
