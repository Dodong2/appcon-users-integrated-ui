import style from './Flow2.module.css'
import logo from '../images/Temologo.svg'
import location from '../images/location.svg'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
const Flow1 = () => {

  const [isOpenModal, setOpenModal] = useState(false)

  const tggleModal = () => {
    setOpenModal(!isOpenModal) 
  }

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
                        <p>Health Alert Network</p>
                    </article>
                </div>
      </div>
      {/*Button*/}
        <div className={style.btn}>
        <button onClick={tggleModal} type="button">Find Nearest Hospital</button>
        </div>
    </div>

    <div className={style.alert}>
      <img src={location} />

      {isOpenModal && (
        <div>
          <main className={`${style['main-container']} ${isOpenModal ? style['open-modal'] : ''}`} onClick={tggleModal}>
            <button onClick={tggleModal} type="button">Open Modal</button>
          </main>
          <div className={`${style['modal-container']} ${isOpenModal ? style['open-modal'] : ''}`} onClick={tggleModal}></div>
          <div className={`${style['modal-window']} ${isOpenModal ? style['open-modal'] : ''}`}>
            <h2>Modal Heading</h2>
            <p>
              Modal Description: Short paragraph about the content related to Modal. You can add UI elements or HTML components.
            </p>
          </div>
        </div>
      )}
    </div>


    </>
  )
}

export default Flow1