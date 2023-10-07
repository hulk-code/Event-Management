import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

 export const AuthContext=createContext(null)
 
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null)
         
    const [loading ,setloading]=useState(true)
    const createUser=(email ,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email ,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth ,email,password)
    }
    const LogOut=()=>{
        setloading(true)
        return signOut(auth)
    }
    const googleLogin=
  useEffect(() =>{
     const unSubscribe=onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
        setloading(false)
     })
     return()=>{
        unSubscribe();
     }
  },[])
    const authInfo={
        user,
        createUser,
        LogOut,
        logIn,
        loading
    }
    return (
      <AuthContext.Provider value={authInfo}>
       {children}
      </AuthContext.Provider>  
    );
};

export default AuthProvider;