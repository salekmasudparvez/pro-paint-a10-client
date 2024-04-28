// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP9hxJTfYTibozhxJUPjGm37lpTpD47n8",
  authDomain: "pro-painting.firebaseapp.com",
  projectId: "pro-painting",
  storageBucket: "pro-painting.appspot.com",
  messagingSenderId: "664918939476",
  appId: "1:664918939476:web:225a94a3a2f61c8e3cdac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;