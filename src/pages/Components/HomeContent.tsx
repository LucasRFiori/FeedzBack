import style from './Home.module.css'
import BannerLeft from '../../assets/bannerhome.jpg'
import Image from 'next/image'
import GoogleLogoBtn from '../../assets/GoogleLogoBtn.svg'


export function HomeContent() {
  return (
    <div className={style.main}>
      <div className={style.imagediv}>
        <Image src={BannerLeft} />
      </div>
      <article className={style.formContainer}>
        <div>
          <header className={style.formTop}>
            <h1>Bem Vindo</h1>
            <p>Identifique-se para continuar</p>
          </header>

          <div>
            <button className={style.googleBtnLogin}><GoogleLogoBtn /><div className={style.googleLoginText}>Login com o Google</div></button>
          </div>
        </div>
      </article>
    </div>
  )
}