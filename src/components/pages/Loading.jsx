import { useState, useEffect } from 'react'
import logo from '../images/Temologo.svg'

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
            <div className="logo">
              <img src={logo} alt='logo'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
