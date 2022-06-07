import { PaperPlaneRight, Users } from "phosphor-react"
import { db } from "../../../firebase"
import { useUserInfo } from "../../Contexts/UserInfoProvider"
import style from './Feedback.module.css'
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";

type CommentProps = {
  documentId: string;
}

export function CreateComment({ documentId } : CommentProps) {
  const { user } = useUserInfo()
  const [comment, setComment] = useState('')
  const [error, setError] = useState(false)

  const documentRef = doc(db, "posts", documentId)

  let date = new Date()
  let formatDateToBr = (date.getDate() <= 9 ? '0' + (date.getDate()) : (date.getDate())) + "/" + (date.getMonth() <= 9 ? '0' + ( date.getMonth() + 1) : (date.getMonth() + 1)) + "/" + date.getFullYear(); 

  async function handleSendComment() {
    if(comment.trim() != '') {
      try {
        await addDoc(collection(db, "comments"), {
          displayName: user.displayName,
          photoUrl: user.photoURL,
          commentText: comment,
          createdAt: formatDateToBr,
          reviewId: documentId,
          createdToOrder: new Date()
        });
        toast.success("Enviado com sucesso.", {
          position: "top-right"
        })
        setError(false)
        setComment('')
      } catch(e) {
        toast.error("Erro ao enviar comentário, tente novamente...", {
          position: "top-right"
        })
      }
    } else {
      setError(true)
    }
  }

  return (
    <article className={style.commentContainer}>
      <header>

        {user.photoURL ? 
        <img src={user.photoURL} style={{ borderRadius: 30 }} width="40px" height="40px" /> 
          : 
        <Users size={40} color="#333" />
        }

      </header>
      <div className={style.inputCommentContainer}>
        <input 
          type='text' 
          placeholder="Escreva seu comentário" 
          onChange={e => setComment(e.target.value)} 
          className={error && style.errorInput}
          value={comment}
        />
        <PaperPlaneRight size={30} style={{padding: 10, cursor: "pointer"}} onClick={handleSendComment}/>
      </div>
    </article>
  )
}