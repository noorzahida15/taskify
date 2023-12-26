// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyDrnZ_jSyIUOEccayb-3ZBgnx_IdbQ-Srk",
  authDomain: "taskify-f6e5a.firebaseapp.com",
  projectId: "taskify-f6e5a",
  storageBucket: "taskify-f6e5a.appspot.com",
  messagingSenderId: "720671895849",
  appId: "1:720671895849:web:9dae286b53e7a974c90738",
  measurementId: "G-WTP3LBEBDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase auth and analytics
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
