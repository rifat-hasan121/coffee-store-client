// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ1XXXn4bw8RjJviX13lvx4sf-fTJBDhc",
    authDomain: "coffee-store-354a3.firebaseapp.com",
    projectId: "coffee-store-354a3",
    storageBucket: "coffee-store-354a3.firebasestorage.app",
    messagingSenderId: "355409987883",
    appId: "1:355409987883:web:a64fb1f2286679a2655d6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);