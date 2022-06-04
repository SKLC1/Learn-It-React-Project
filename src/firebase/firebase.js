// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz9RX_f__B0NmZ06CPA7p8Pp2AJCALayY",
  authDomain: "learnit-8b2cb.firebaseapp.com",
  projectId: "learnit-8b2cb",
  storageBucket: "learnit-8b2cb.appspot.com",
  messagingSenderId: "1097001317563",
  appId: "1:1097001317563:web:94d2c0e4a685838ad5659e",
  measurementId: "G-HK07LMBTPP"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)