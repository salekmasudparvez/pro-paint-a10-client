import {  signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const[loading, setLoading]=useState(true)

    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider()

    const creatUserGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth,providerGithub)
    }
    const creatUserGoogle =()=>{
        setLoading(true)
       return signInWithPopup(auth,providerGoogle)
    }
    const creatUserPassword = ( email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

   const signInWithPassword =( email, password)=>{
    // setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }
    
  
    const LogOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
           
        })
        return ()=> unsubscribe()
    },[]);

    const GetAllData ={
        creatUserGoogle,user,LogOutUser,creatUserPassword,signInWithPassword,creatUserGithub,loading,setLoading
    }
    return (
        <AuthContext.Provider value={GetAllData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;