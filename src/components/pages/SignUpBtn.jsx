import personSign from "../images/personSign.svg";
import { Link } from 'react-router-dom';
const SignUpBtn = () => {
  return (
    <>
      <div className="signUp-btn">
      <Link to="/LoginForm">
          <button><span>
          <img src={personSign}/>
          </span>
          Signup
          </button>
          </Link>
          </div>
    </>
  );
};

export default SignUpBtn;
