// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXmjERDz3ueYbGobb8d5hUyHNC3zJjXKQ",
    authDomain: "practice-crud-auth.firebaseapp.com",
    projectId: "practice-crud-auth",
    storageBucket: "practice-crud-auth.appspot.com",
    messagingSenderId: "700847855955",
    appId: "1:700847855955:web:179250b5c4b1c2e63fa9a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;