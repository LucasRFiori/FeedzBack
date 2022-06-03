import { ChatCircle, HeartStraight, User, Users } from "phosphor-react";
import { ReviewType } from ".";
import style from './Feedback.module.css'

type CreateReviewProps = {
    item: ReviewType;
}

export function ReviewItem({ item }: CreateReviewProps) {
    return (
        <li className={style.feed__item}>
            {item && (
                <div className={style.feed__box}>
                    <div className={style.feed__review}>
                        <div className={style.feed__user}>
                            {item.createdBy.photoUrl ? <img src={item.createdBy.photoUrl} style={{ borderRadius: 30, marginRight: 10 }} width="50px" height="50px" /> : <Users size={40} color="#333" />}
                        </div>
                        <div className={style.feed__content}>
                            <div className={style.feed__contentHeader}>
                                <p className={style.feed__userName}>
                                    {item.createdBy.displayName}
                                </p>
                                <div className={style.feed__date}>
                                    {item.createdAt}
                                </div>
                            </div>
                            <p className={style.feed__text}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                    <div className={style.feed__buttons}>
                        <div className={style.feed__like}>
                            <HeartStraight size={15} />
                            <div className={style.feed__likeText}>
                                Curtir
                            </div>
                            <div className={style.feed__likeCount}>
                                (0)
                            </div>
                        </div>
                        <div className={style.feed__answer}>
                            <ChatCircle size={15} />
                            <div className={style.feed__answerText}>
                                Comentar
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </li>
    )
}