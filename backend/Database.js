// Imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDocs, getDocs } from "firebase/firestore";

//--

// Connection String
const firebaseConfig = {
  apiKey: "AIzaSyB7ZmhpjRDJKrPrWjrOgEB8UUVEih8__90",
  authDomain: "local-909ca.firebaseapp.com",
  projectId: "local-909ca",
  storageBucket: "local-909ca.appspot.com",
  messagingSenderId: "527865656018",
  appId: "1:527865656018:web:bba41778e6ab673e5f330b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db, getFirestore, collection, addDocs, getDocs };
