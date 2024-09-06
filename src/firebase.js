// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzAPF-wf115tXaQ7fcM3nQ5D9C4mBsu5Q",
  authDomain: "todo-136b9.firebaseapp.com",
  projectId: "todo-136b9",
  storageBucket: "todo-136b9.appspot.com",
  messagingSenderId: "520409903299",
  appId: "1:520409903299:web:3f3ae6dac307419c27f276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);