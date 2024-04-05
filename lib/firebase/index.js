// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3CzQHhmoXPuAUweoIqHXDRqayCqLrQ40",
  authDomain: "tracker-f8700.firebaseapp.com",
  projectId: "tracker-f8700",
  storageBucket: "tracker-f8700.appspot.com",
  messagingSenderId: "868640990273",
  appId: "1:868640990273:web:7dffaa52499167b92a12c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };