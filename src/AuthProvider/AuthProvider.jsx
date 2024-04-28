import {  signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)

    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider()

    const creatUserGithub = ()=>{
        return signInWithPopup(auth,providerGithub)
    }
    const creatUserGoogle =()=>{
       return signInWithPopup(auth,providerGoogle)
    }
    const creatUserPassword = ( email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

   const signInWithPassword =( email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
   }
    
  
    const LogOutUser = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
           
        })
        return ()=> unsubscribe()
    },[]);

    const GetAllData ={
        creatUserGoogle,user,LogOutUser,creatUserPassword,signInWithPassword,creatUserGithub
    }
    return (
        <AuthContext.Provider value={GetAllData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;