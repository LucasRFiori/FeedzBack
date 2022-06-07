import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'

type UserType = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

type UserInfoProvider = {
  user: UserType
}

const UserInfo = createContext({} as UserInfoProvider)

export function UserInfoProvider({children}) {
  const [user, setUser] = useState({} as UserType)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    }
  });

  return(
    <UserInfo.Provider value={{user}}>
      {children}
    </UserInfo.Provider>
  )
}

export function useUserInfo() {
  const { user } = useContext(UserInfo)

  return {user}
}

