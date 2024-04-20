import { useEffect } from "react";
import Load from "./Loading";
import "bootstrap/dist/css/bootstrap.css";
import Host from "../images/Host.png";
import Loc from "../images/loc.svg";
import bell from "../images/bell.svg";
import phone from "../images/phone-call.svg";
import { Link } from 'react-router-dom'

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
      {/* Hostpital 1 */}
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
              <div>
                <button>
                  <img src={Loc} />
                </button>
              </div>
              <div className="btn-2">
              <Link to='/Notif'>
                <button>
                  <img src={phone}></img>
                </button>
                </Link>
              </div>
            </div>
            <div className="btn3">
              <button>
                <img src={bell} />
                <p>Emergency</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Hostpital 2*/}
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
              <div>
                <button>
                  <img src={Loc} />
                </button>
              </div>
              <div className="btn-2">
                <button>
                  <img src={phone}></img>
                </button>
              </div>
            </div>
            <div className="btn3">
              <button>
                <img src={bell} />
                <p>Emergency</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Hostpital 3 */}
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
              <div>
                <button>
                  <img src={Loc} />
                </button>
              </div>
              <div className="btn-2">
                <button>
                  <img src={phone}></img>
                </button>
              </div>
            </div>
            <div className="btn3">
              <button>
                <img src={bell} />
                <p>Emergency</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hospitals;
