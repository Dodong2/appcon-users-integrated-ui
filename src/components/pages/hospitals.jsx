import { useEffect } from "react";
import Load from "./Loading";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Host from "../images/Host.png";


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
      <div className="container">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-parent">
                <div className="card-child">
                  <div className="center-contents">
                    <img src={Host} className="d-block" alt="..." />
                    <h1>Hospital 1</h1>
                    <p>Real, Calamba, 4027 Laguna</p>
                    <div className="btn-2">
                      <button>kckc</button>
                      <button>kckc</button>
                      <button>kckc</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-parent">
                <div className="card-child">
                  <div className="center-contents">
                    <img src={Host} className="d-block" alt="..." />
                    <h1>Hospital 2</h1>
                    <p>Real, Calamba, 4027 Laguna</p>
                    <div className="btn-2">
                      <button>kckc</button>
                      <button>kckc</button>
                      <button>kckc</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="card-parent">
            <div className="card-child">
              <div className="center-contents">
                <img src={Host} className="d-block" alt="..." />
                <h1>Hospital 3</h1>
                <p>Real, Calamba, 4027 Laguna</p>
                <div className="btn-2">
                  <button>kckc</button>
                  <button>kckc</button>
                  <button>kckc</button>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Hospitals;
