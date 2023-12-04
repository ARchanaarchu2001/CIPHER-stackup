// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJc1dd5o23kEsJTu7D-kFRqX5zl8STH_4",
  authDomain: "contact-19ec9.firebaseapp.com",
  databaseURL: "https://contact-19ec9-default-rtdb.firebaseio.com",
  projectId: "contact-19ec9",
  storageBucket: "contact-19ec9.appspot.com",
  messagingSenderId: "538472040942",
  appId: "1:538472040942:web:6728fc42c40b46a12266ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app);

export{ db,auth };