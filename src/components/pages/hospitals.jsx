import { useEffect } from "react";
import Load from "./Loading";
import "bootstrap/dist/css/bootstrap.css";
import Host from "../images/Host.png";
import Loc from "../images/loc.svg"
import bell from "../images/bell.svg"

const Hospitals = () => {
  useEffect(() => {
    document.title = "Hospitals | HEAN";
  }, []);

  // const searchParams = new URLSearchParams(window.location.search);
  // const latitude = searchParams.get('lat');
  // const longitude = searchParams.get('long');

  return (
    <>
      <Load />
      <div className="box">
        <div className="card">
          <img src={Host} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="txt-left">
              <h1>Hostpital 1</h1>
              <p>CMC, Real, Calamba, 4027 Laguna</p>
            </div>
            <div className="txt-right">
              <p>
                <span>22</span> Available Beds
              </p>
            </div>
          </div>
          <div className="card-body">
          
          <div className="btn1">
            <button><img src={Loc}/></button>
            </div>
            <div className="btn2">
            <button>Ambulance</button>
            </div>
            <div className="btn3">
            <button><img src={bell}/> <p>Emergency</p></button>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Hospitals;
