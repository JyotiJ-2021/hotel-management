// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClWTsphhwcKQC2qtOm4zU6vOyL-cJW6Rg",
  authDomain: "hotel-booking-89927.firebaseapp.com",
  projectId: "hotel-booking-89927",
  storageBucket: "hotel-booking-89927.appspot.com",
  messagingSenderId: "498555808567",
  appId: "1:498555808567:web:a1b741367b9c09866008b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
