import { addDoc, collection } from "firebase/firestore";
import { PaperPlaneRight, UserCircle, Users } from "phosphor-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../../firebase";
import { useUserInfo } from "../../Contexts/UserInfoProvider";
import style from './Feedback.module.css'

export function CreateReview() {

  const { user } = useUserInfo()
  const [text, setText] = useState<string>()

  async function handleSendReview() {
    
    let date = new Date()
    let formatDateToBr = (date.getDate() <= 9 ? '0' + (date.getDate()) : (date.getDate())) + "/" + (date.getMonth() <= 9 ? '0' + ( date.getMonth() + 1) : (date.getMonth() + 1)) + "/" + date.getFullYear(); 
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        description: text,
        createdAt: formatDateToBr,
        createdBy : {
          displayName: user.displayName,
          photoUrl: user.photoURL,
        },
        like: 0
      });
      setText('')
      toast.success('Enviado com sucesso!');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return(
      <>
        <div className={style.createReviewContainer}>
          <div className={style.createReview}>
            {user.photoURL ? <img src={user.photoURL} style={{borderRadius: 30, marginRight:10}} width="50px" height="50px"/> : <UserCircle size={50} color="#333" />}
            <input type='text' placeholder="Conte-nos sua opinião" onChange={(e) => setText(e.target.value)} value={text}/>
          </div>
          <div className={style.createReviewBtn}>
          <button onClick={handleSendReview}>Enviar <PaperPlaneRight size={20}/></button>
          </div>
        </div>
      </>
  )
}