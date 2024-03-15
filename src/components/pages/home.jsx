import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Load from "./Loading";
import logo from "../images/logoHean.png";
import location from "../images/location.png";
import layer1 from "../images/layer1.svg";
import layer2 from "../images/layer2.svg";
import layer3 from "../images/layer3.svg";
import layer4 from "../images/layer4.svg";
import SignUpBtn from "./SignUpBtn";

const Home = () => {
  //useState Sections
  const [isOpenModal, setOpenModal] = useState(false);
  const [isGettingLocation, setGettingLocation] = useState(false);

  //for title
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "HEAN";
  }, []);

  //for Show allow access
  const tggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  //for allow location
  const allowLocation = () => {
    setGettingLocation(true);
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude, "Longitude:", longitude);
        navigate(`/hospitals?lat=${latitude}&long=${longitude}`);
        setGettingLocation(false);
      });
    }, 1000);
  };

  return (
    <>
      {/* Splash Screen */}
      <Load />
      {isOpenModal ? (
        <div className="container">
          {/* if modal is open magpapakita to once na ma-click si button na find nearest.....*/}
          <div className="center-contents">
            <div className="main-layers">
              <img src={location} alt="logo" className="location-logo"/>
              <img src={layer1}/>
              <img src={layer2}/>
              <img src={layer3}/>
              <img src={layer4}/>
            </div>
          </div>
          <div className="txt-title-1">
            <h1>Access your location</h1>
            <p>We need your permission to <br/><span>access your location.</span> </p>
          </div>
          <div className="btn">
            <button
              onClick={allowLocation}
              type="button"
              disabled={isGettingLocation}
            >
              {isGettingLocation
                ? "Getting your location..."
                : "Allow Location"}
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
        <SignUpBtn/>
          {/* unang makikita after ng loading */}
          <div className="center-contents">
            <div className="main-layers">
              <img src={logo} alt="logo" />
              <img src={layer1} />
              <img src={layer2} />
              <img src={layer3} />
              <img src={layer4} />
            </div>
          </div>
          <div className="txt-title">
            <h1>HEAN</h1>
            <p>Health Electronic Alert Network</p>
            {/*<p>Caring for life’s greatest treasure: health.</p>*/}
          </div>
          <div className="btn">
            <button onClick={tggleModal} type="button">
              Find Nearest Hospital
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
