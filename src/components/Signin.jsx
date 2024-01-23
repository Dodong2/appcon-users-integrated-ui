import style from './Signin.module.css'
import Images1 from './images/1st.jpg'

const Signin = () => {
  return (
    <>
    <section>
    {/* Card */}
      <div className={style.card}>
      {/* left */}
        <div className={style.left}>
          <img src={Images1} alt=''/>
            <div className={style['btns-list']}>
              <div className={style.btn}>
                <button className={style.radiant}>Login</button>
              </div>
              <div className={style.btn}>
                <button className={style.radiant}>SignUp</button>
              </div>
            </div>
          </div>
      {/* right */}
      <div className={style.right}>
        <h1>Hean</h1>
        <p>Health Electronic Alert Network</p>
        {/* Forms */}
        <form>
        {/* username */}
          <label>
            <div className={style.icon}></div>
            <input type='text' placeholder='Username' name='username'/>
          </label>
          {/* password */}
          <label>
            <div className={style.icon}></div>
            <input type='text' placeholder='Password' name='password'/>
          </label>
            <button>login</button>
        </form>
      </div>
      </div>
    </section>
    </>
  )
}

export default Signin