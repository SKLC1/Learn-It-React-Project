import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase";

export const UserContext = createContext()

function UserProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  useEffect(()=>{
    getAuth().onAuthStateChanged((user)=>{
      setCurrentUser(user)
    })
  },[])
  return(
    <UserContext.Provider value={currentUser}>
      {children}
    </UserContext.Provider>
  )
  
}

export default UserProvider;