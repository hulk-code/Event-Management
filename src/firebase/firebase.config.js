// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcVw6xoczghZiT8xT3FH14Zs8cdEtXKd4",
  authDomain: "social-event-management-bdc18.firebaseapp.com",
  projectId: "social-event-management-bdc18",
  storageBucket: "social-event-management-bdc18.appspot.com",
  messagingSenderId: "913478616764",
  appId: "1:913478616764:web:6d5801ea6af07fb5f132b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth ;