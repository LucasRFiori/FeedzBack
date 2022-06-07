import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { Users } from "phosphor-react"
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import style from './Feedback.module.css'

type CommentListProps = {
  documentId: string;
}

type CommentType = {
  displayName: string;
  photoUrl?: string;
  reviewId: string; 
  commentText: string;
  createdAt: string;
  createdToOrder: string;
}

export function CommentList({ documentId }: CommentListProps) {
  const [comment, setComment] = useState<CommentType[]>([])

  useEffect(() => {
    const q = query(collection(db, "comments"), where('reviewId', '==', documentId), orderBy('createdToOrder'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data: any = querySnapshot.docs.map((doc: any) => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });
        if(data) {
          setComment(data)
        }
    });

      return() => unsubscribe();
  }, [])

console.log(comment)

  return(
    <ul className={style.commentsContainer}>
      {comment && comment?.map((item, index) => (
        <li key={index}>
          <header>
            {item.photoUrl ? 
            <img src={item.photoUrl} style={{ borderRadius: 30, marginRight: 10 }} width="35px" height="35px" /> 
              : 
            <Users size={40} color="#333" />
            }
          </header>
          <div className={style.comment}>
            <div className={style.headComment}>
              <span>{item.displayName}</span>
              <span>{item.createdAt}</span>
            </div>
            <div className={style.commentText}>
              {item.commentText}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}