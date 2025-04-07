// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB5a34xe2kzPVUuU8P3L2g5bnBFBFRTPek",
    authDomain: "resourcefinder-71248.firebaseapp.com",
    projectId: "resourcefinder-71248",
    storageBucket: "resourcefinder-71248.firebasestorage.app",
    messagingSenderId: "948492568823",
    appId: "1:948492568823:web:1c9849bc7268a5d2f16bf2",
    measurementId: "G-1J7T50JRMC"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
