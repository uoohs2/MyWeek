// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs52cC6C2XjmlR_V3F94r-fEpyxbiAE5w",
  authDomain: "sparta-react-basic-41e70.firebaseapp.com",
  projectId: "sparta-react-basic-41e70",
  storageBucket: "sparta-react-basic-41e70.appspot.com",
  messagingSenderId: "1088082740078",
  appId: "1:1088082740078:web:4b8ae9abb91c0ec11b777f",
  measurementId: "G-5T9PJWZZNF",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
