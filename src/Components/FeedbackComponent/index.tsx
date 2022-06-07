import Image from 'next/image'
import style from './Feedback.module.css'
import Logo from '../../assets/logo.jpeg'
import { Header } from './Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { CreateReview } from './CreateReview'
import { ReviewItem } from './ReviewItem'
import { db } from '../../firebase'
import { useEffect, useState } from 'react'
import { collection, query, onSnapshot } from "firebase/firestore";

export type ReviewType = {
    comments: [{}]
    createdAt: string;
    createdBy: {
        displayName: string;
        photoUrl: string;
    }
    description: string;
    id: string;
    like: number;
}

export function FeedbackComponent(){
    const [review, setReview] = useState([] as ReviewType[])

    useEffect(() => {
        const q = query(collection(db, "posts"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = querySnapshot.docs.map((doc: any) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setReview(data)
        });

        return() => unsubscribe();
    }, [])
    
    return (
        <div>
            <Header />
            <ToastContainer />
            <div className={style.main__container}>
                <div className={style.feed}>
                    <div className={style.feed__header}>
                        <h3 className={style.feed__title}>
                            Feedbacks
                        </h3>
                    </div>
                    <CreateReview />
                    <ul className={style.feed__list}>
                        {review && review.map((item) => (
                            <ReviewItem key={item.id} item={item}/>
                        ))}
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