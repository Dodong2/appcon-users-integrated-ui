import style from './Flow1.module.css'
import logo from '../images/Temologo.svg'
const Flow1 = () => {
  return (
    <>
    {/*container*/}
    <div className={style.container}>
    {/*LOGO*/}
      <div className={style.logo}>
        <img src={logo} alt='logo'/>
      </div>
    </div>
    </>
  )
}

export default Flow1