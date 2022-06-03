import style from './Home.module.css'
import BannerLeft from '../../../assets/bannerhome.jpg'
import Image from 'next/image'
import GoogleLogoBtn from '../../../assets/GoogleLogoBtn.svg'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../../firebase';
import Router from 'next/router'

const provider = new GoogleAuthProvider();


export function HomeComponent() {

  function handleGoogleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        if(user) {
          Router.push('/feedback')
        }
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

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
            <button className={style.googleBtnLogin} onClick={handleGoogleLogin}>
              <GoogleLogoBtn />
              <div className={style.googleLoginText}>Login com o Google</div></button>
          </div>
        </div>
      </article>
    </div>
  )
}