// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZsmbVEkPedKOYB6uYBsdOaUbRytVlqWw",
  authDomain: "erozgarapp-9e5f6.firebaseapp.com",
  projectId: "erozgarapp-9e5f6",
  storageBucket: "erozgarapp-9e5f6.appspot.com",
  messagingSenderId: "71528059464",
  appId: "1:71528059464:web:9b5d9b52fafb4d5adcbe7d",
  measurementId: "G-FDNLDXFQ55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;