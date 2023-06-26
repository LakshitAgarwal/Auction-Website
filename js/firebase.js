import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBom0d7KUbcnsKJuXah6cGPnvq7z4jwxPA",
    authDomain: "auction-website-c1559.firebaseapp.com",
    projectId: "auction-website-c1559",
    storageBucket: "auction-website-c1559.appspot.com",
    messagingSenderId: "1079108881515",
    appId: "1:1079108881515:web:9bf0a1820825a1a748b52e",
    measurementId: "G-VHKV9PRY3T"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);