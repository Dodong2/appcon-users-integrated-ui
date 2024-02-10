import style from './Flow2.module.css'
import logo from '../images/Temologo.svg'
const Flow1 = () => {
  return (
    <>
    {/*container*/}
    <div className={style.container}>
    {/*LOGO*/}
      <div className={style['center-contents']}>
        <img src={logo} alt='logo'/>
    {/*TEXTS*/}
            <article className={style.txt1}>
                <h1>HEAN</h1>
            </article>
                <div className={style.txt2}>
                    <article className={style['txt2-child']}>
                        <p>is a compassionate and dedicated Internal Medicine Physician with a deep</p>
                    </article>
                </div>
      </div>
      {/*Button*/}
        <div className={style.btn}>
        <button>Find Nearest Hospital</button>
        </div>
    </div>
    </>
  )
}

export default Flow1