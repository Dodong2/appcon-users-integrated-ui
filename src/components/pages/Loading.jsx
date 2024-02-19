import { useState, useEffect } from 'react'
import loadlayer1 from "../images/load1-layer.svg";
import loadlayer2 from "../images/load2-layer.svg";
import loadlayer3 from "../images/load3-layer.svg";
import loadlayer4 from "../images/load4-layer.svg";


function App() {

  /*Timer*/
 const [isLoading, setLoading] = useState(true)
 useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 500)


  return () => clearTimeout(timer)
 }, [])

  return (
    <>
{/* Loading Page */}
      <div className={`loading-container ${isLoading ? 'visible' : 'hidden'}`}>
        <div className={`${isLoading ? 'visible' : 'hidden'}`}>
          <div className="loading-logo">
            {/*LOGO*/}
            <div className="logo">
            <div className="image-stack">
            <div className="layer-stack">
              <img src={loadlayer1} alt="" />
              <img src={loadlayer2} alt="" />
              <img src={loadlayer3} alt="" />
              <img src={loadlayer4} alt="" />
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
