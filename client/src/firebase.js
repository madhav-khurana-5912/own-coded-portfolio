// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6BXrUEk9OMgknc34lQWRfWmhi6ZK8wMM",
    authDomain: "portfolio-by-antigravity.firebaseapp.com",
    projectId: "portfolio-by-antigravity",
    storageBucket: "portfolio-by-antigravity.firebasestorage.app",
    messagingSenderId: "956302331858",
    appId: "1:956302331858:web:9f4ea07f11355efc91820b",
    measurementId: "G-Z3HVEEQEZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
