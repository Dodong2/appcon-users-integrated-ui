import { Link } from 'react-router-dom'
import bell from '../images/notif-bell.svg'


const Notif = () => {
  return (
    <div className="notif">
      <div className="notif-cont">
        <div className="pulse">
          <span style={{ '--i': 0 }}></span>
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span>
        </div>
        <div className="notif-img">
          <img src={bell} />
        </div>
      </div>
      <div className='txt-notif'>
        <h1>Get Notified!</h1>
        <p>Your Emergency notification has been received,</p>
        <p>and our staff are en route to assist you.</p>
        <div className="btn">
        <Link to='/Services'>
          <button>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Notif
