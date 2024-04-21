import { useState, useEffect } from 'react'
import logo from '../images/logoHean.png'
import loading1 from '../images/load1-layer.svg'
import loading2 from '../images/load2-layer.svg'
import loading3 from '../images/load3-layer.svg'
import loading4 from '../images/load4-layer.svg'

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
        <div className={`first-page ${isLoading ? 'visible' : 'hidden'}`}>
          <div className="loading-logo">
            {/*LOGO*/}
            <div className='layers-logo'>
              <img src={logo} alt='logo' />
              <img src={loading1} />
              <img src={loading2} />
              <img src={loading3} />
              <img src={loading4} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
