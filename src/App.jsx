import { useState, useEffect } from 'react'
import './App.css'
import Flow1 from './components/Flow1/Flow1'
import Flow2 from './components/Flow2/Flow2'
function App() {

  /*Timer*/
 const [isLoading, setLoading] = useState(true)
 useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 1000)

  return () => clearTimeout(timer)
 }, [])

  return (
    <>
      <div className={`container  ${isLoading ? 'fade-in' : 'fade-out'}`}>
{/* first-page is FLow1 unang magpapakita*/}
        <div className={`first-page ${isLoading ? 'visible' : 'hidden'}`}>
          <Flow1/>
        </div>
{/* second-page is FLow2 ipapakita after mawala ni Flow1 */}
        <div className={`second-page ${isLoading ? 'hidden' : 'visible'}`}>
          <Flow2/>
        </div>
      </div>
    </>
  )
}

export default App
