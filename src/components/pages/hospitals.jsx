import React, { useState, useEffect } from "react";
import Load from "./Loading";
import "bootstrap/dist/css/bootstrap.css";
import Host from "../images/Host.png";
import Loc from "../images/loc.svg";
import bell from "../images/bell.svg";
import phone from "../images/phone-call.svg";
import { Link } from 'react-router-dom'

const Hospitals = () => {
  const [loading, setLoading] = useState(true);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Fetch hospitals data based on user's current location
    const fetchData = async () => {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const latitude = searchParams.get('lat');
        const longitude = searchParams.get('long');
        const response = await fetch(`https://hean.mchaexpress.com/web-app/appcon/api/nearest-hospitals?lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        setHospitals(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const notifyHospital = async (hospitalNo) => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const latitude = searchParams.get('lat');
      const longitude = searchParams.get('long');
      const response = await fetch(`https://hean.mchaexpress.com/web-app/appcon/api/notify-hospital?hospital_no=${hospitalNo}&latitude=${latitude}&longitude=${longitude}`, {
        method: 'POST'
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error notifying hospital:', error);
      alert('Error notifying hospital');
    }
  };

  if (loading) {
    return <Load />;
  }

  const openMap = (latitude, longitude) => {
    // Construct the map link with the latitude and longitude
    const mapLink = `https://maps.google.com/maps?q=${latitude},${longitude}`;
  
    // Open the map link in a new window
    window.open(mapLink, '_blank');
  };

  return (
    <>
      {hospitals.map((hospital, index) => (
        <div className="box" key={index}>
          <div className="card">
            <img src={Host} className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="txt-left">
                <h1>{hospital.hospital_name}</h1>
                <p>{hospital.address}</p><br/>
                <p style={{ fontWeight: 'bold' }}>SERVICES</p>
                <p>{hospital.services}</p>
              </div>
              <div className="txt-right">
                <p>
                  <span>{hospital.available_beds}</span> Available Beds
                </p>
              </div>
            </div>
            <div className="card-body">
            <div className="btn-content">
              <div className="btn1">
                <div>
                  <button onClick={() => openMap(hospital.latitude, hospital.longitude)}>
                    <img src={Loc} />
                  </button>
                </div>
                <div className="btn-2">
                <Link to={`tel:${hospital.phone_number}`}>
                  <button>
                    <img src={phone} alt="phone" />
                  </button>
                </Link>
                </div>
              </div>
              <div className="btn3">
                <button onClick={() => notifyHospital(hospital.hospital_no)}>
                  <img src={bell} alt="bell" />
                  <p>Emergency</p>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Hospitals;
