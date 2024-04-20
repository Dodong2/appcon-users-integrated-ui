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
        <img src={bell}/>
        </div>
      </div>
    </div>
  )
}

export default Notif
