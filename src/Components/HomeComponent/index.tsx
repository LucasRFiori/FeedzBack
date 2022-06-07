import style from './Home.module.css'
import BannerLeft from '../../assets/bannerhome.jpg'
import Image from 'next/image'
import GoogleLogoBtn from '../../assets/GoogleLogoBtn.svg'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase';
import Router from 'next/router'
import Logo from '../../assets/logo.jpeg'

const provider = new GoogleAuthProvider();


export function HomeComponent() {

  function handleGoogleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        console.log(user)
        if(user) {
          Router.push('/feedback')
        }
        // ...
      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);

      });
  }

  return (
    <div className={style.main}>
      <div className={style.imagediv}>
        <Image src={BannerLeft} className={style.image}/>
      </div>
      <article className={style.formContainer}>
        <div>
          <header className={style.formTop}>
            <Image src={Logo} />
            <h1>Bem Vindo</h1>
            <p>Identifique-se para continuar</p>
          </header>

          <div>
            <button className={style.googleBtnLogin} onClick={handleGoogleLogin}>
              <GoogleLogoBtn />
              <div className={style.googleLoginText}>Login com o Google</div></button>
          </div>
        </div>
      </article>
    </div>
  )
}