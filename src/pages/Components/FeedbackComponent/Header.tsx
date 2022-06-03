import style from './Feedback.module.css'
import Logo from '../../../assets/logo.jpeg'
import Image from 'next/image'
import { Door, Users } from 'phosphor-react'
import { useUserInfo } from '../../Contexts/UserInfoProvider'
import { toast, ToastContainer } from 'react-toastify'
import { signOut } from "firebase/auth";
import { auth } from '../../../firebase'
import Router from 'next/router'

export function Header() {
    const { user } = useUserInfo()

    function handleLogout() {
        signOut(auth).then(() => {
            toast.success('Logout realizado com sucesso.', {
                autoClose: 2000,
                position: toast.POSITION.TOP_RIGHT
            })
            setTimeout(() => {
                Router.push('/')
            }, 2000)
        }).catch((error) => {
            toast.error('Erro ao realizar logout', {
                autoClose: 4000,
                position: toast.POSITION.TOP_RIGHT
            })
        });
    }

    return(
    <>
        <div className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__logo}>
                    <Image src={Logo} />
                </div>
                <div className={style.header__content}>
                    <div className={style.header__customer}>
                        {user?.photoURL ? <img src={user.photoURL} style={{borderRadius: 30, marginRight:10}} width="50px" height="50px"/> : <Users size={40} color="#333" />}
                        
                        <p className={style.header__customerName}>
                            {user.displayName}
                        </p>
                    </div>
                    <div className={style.header__logout}>
                        <button className={style.header__logoutButton}>
                            <Door size={40} color="#333" onClick={handleLogout}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}