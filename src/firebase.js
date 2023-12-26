// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyC0XB9RwEW1xm6rrtiWhDHL3yZOfgQn4CA",
  authDomain: "taskmanager-24c39.firebaseapp.com",
  projectId: "taskmanager-24c39",
  storageBucket: "taskmanager-24c39.appspot.com",
  messagingSenderId: "774732387843",
  appId: "1:774732387843:web:ff64d7339dc9dc9b17a036",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Cloud Messaging and get a reference to the service

const auth = getAuth(app);

export { auth };
