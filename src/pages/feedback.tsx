import { FeedbackComponent } from "../Components/FeedbackComponent";
import { UserInfoProvider } from "../Contexts/UserInfoProvider";

export default function FeedBackPage() {
    
  return(
    <UserInfoProvider>
      <FeedbackComponent/>
    </UserInfoProvider>
  )
}