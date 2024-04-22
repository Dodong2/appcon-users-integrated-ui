import JPlogo from '../images/JP Hostpital.svg'
import { MdLocationOn } from "react-icons/md";
import equip from '../images/equipments.svg'
import doc from '../images/doctors.svg'
import beds from '../images/beds.svg'
import rooms from '../images/rooms.svg'

const Services = () => {
  return (
    <>
      <div className='serv-container'>
        <div className='serv'>
          <div className='serv-cont'>
            <nav>
              <div>
                <img src={JPlogo} />
              </div>
              <div className='tag-name'>
                <h1>JP HOSPITAL</h1>
                <p><MdLocationOn />LOS BAÑOS, LAGUNA</p>
              </div>
            </nav>
            <div className='serv-txt'>
              <h1>SERVICES OFFERED</h1>
              <p>We provide comprehensive medical services, supported by advanced surgical equipment.</p>
            </div>
            <div className='serv-offer'>
              {/* Equipments */}
              <div className='equip'>
                <div className="equip-bg">
                  <div className='elem1'>Services</div>
                  <h1>Equipments</h1>
                  <p>Your emergency notification has been received,<br /><span>and our staff are en route to assist you.</span>
                  </p>
                </div>
                <img src={equip} />
              </div>
              {/* Doctors */}
              <div className="doc">
                <div className='doc-bg'>
                  <div className='elem1'>Services</div>
                  <h1>Doctors</h1>
                  <p>Your emergency notification has been received,<br /><span>and our staff are en route to assist you.</span>
                  </p>
                </div>
                <img src={doc} />
              </div>
            </div><br></br>
            <div className='serv-offer'>
              {/* Beds */}
              <div className='beds'>
                <div className='beds-bg'>
                  <div className='elem1'>Services</div>
                  <h1>Beds</h1>
                  <p>Your emergency notification has been received,<br /><span>and our staff are en route to assist you.</span>
                  </p>
                </div>
                <img src={beds} />
              </div>
              {/* Rooms */}
              <div className="rooms">
                <div className='rooms-bg'>
                  <div className='elem1'>Services</div>
                  <h1>Rooms</h1>
                  <p>Your emergency notification has been received,<br /><span>and our staff are en route to assist you.</span>
                  </p>
                </div>
                <img src={rooms} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services

