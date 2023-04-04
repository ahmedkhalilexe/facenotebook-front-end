// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZhu3xCQND5pN1xv1Cp67wRaqp8RT78oY",
  authDomain: "facenotebookv1.firebaseapp.com",
  projectId: "facenotebookv1",
  storageBucket: "facenotebookv1.appspot.com",
  messagingSenderId: "336341525805",
  appId: "1:336341525805:web:6ff6b7190c870ac5465fa4",
  measurementId: "G-S77BYENW1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);