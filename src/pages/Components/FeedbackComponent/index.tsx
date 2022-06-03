import { Door, Users, User, ChatCircle, HeartStraight } from 'phosphor-react'
import Image from 'next/image'
import style from './Feedback.module.css'
import Logo from '../../../assets/logo.jpeg'

export function FeedbackComponent(){
    return (
        <div>
            <div className={style.header}>
                <div className={style.header__container}>
                    <div className={style.header__logo}>
                        <Image src={Logo} />
                    </div>
                    <div className={style.header__content}>
                        <div className={style.header__customer}>
                            <Users size={40} color="#333" />
                            <p className={style.header__customerName}>
                                Rafael Eto
                            </p>
                        </div>
                        <div className={style.header__logout}>
                            <button className={style.header__logoutButton}>
                                <Door size={40} color="#333" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.main__container}>
                <div className={style.feed}>
                    <div className={style.feed__header}>
                        <h3 className={style.feed__title}>
                            Reviews
                        </h3>
                    </div>
                    <ul className={style.feed__list}>
                        <li className={style.feed__item}>
                            <div className={style.feed__box}>
                                <div className={style.feed__review}>
                                    <div className={style.feed__user}>
                                        <User size={50} />
                                    </div>
                                    <div className={style.feed__content}>
                                        <div className={style.feed__contentHeader}>
                                            <p className={style.feed__userName}>
                                                Rafael Eto
                                            </p>
                                            <div className={style.feed__date}>
                                                1 jun 2022
                                            </div>
                                        </div>
                                        <p className={style.feed__text}>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                        </p>
                                    </div>
                                </div>
                                <div className={style.feed__buttons}>
                                    <div className={style.feed__like}>
                                        <HeartStraight size={15} />
                                        <div className={style.feed__likeText}>
                                            Like
                                        </div>
                                        <div className={style.feed__likeCount}>
                                            (0)
                                        </div>
                                    </div>
                                    <div className={style.feed__answer}>
                                        <ChatCircle size={15} />
                                        <div className={style.feed__answerText}>
                                            Answer
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.footer__container}>
                    <div className={style.footer__block}>
                        <div className={style.footer__logo}>
                            <Image src={Logo} />
                        </div>
                        <ul className={style.footer__studentList}>
                            <li className={style.footer__studentName}>
                                Felipe Hiroyuki Kaihatu - RA: 600636
                            </li>
                            <li className={style.footer__studentName}>
                                João Vitor Mouro - RA: 600652
                            </li>
                            <li className={style.footer__studentName}>
                                Lucas Rodrigues Fiori - RA: 600687
                            </li>
                            <li className={style.footer__studentName}>
                                Nicolas Hiroyuki Nacasawa - RA: 605700
                            </li>
                            <li className={style.footer__studentName}>
                                Rafael Tanaka Eto - RA: 601063
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.footer__copyright}>
                    <p className={style.footer__copyrightText}>
                        © Todos os direitos reservados
                    </p>
                </div>
            </div>
        </div>
    )
}