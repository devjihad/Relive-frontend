// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6mkRLdyMZLLJGsNvoyQIZNme4bBVHe-o",
  authDomain: "relive-e8ec4.firebaseapp.com",
  projectId: "relive-e8ec4",
  storageBucket: "relive-e8ec4.firebasestorage.app",
  messagingSenderId: "63440605075",
  appId: "1:63440605075:web:e8fd8d607fe2e5c5742266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth =getAuth(app)
export default Auth