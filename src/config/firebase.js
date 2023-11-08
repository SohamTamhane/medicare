import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCKsHNP5T8YO8m918Mahlo-oGSbOp9rrBw",
  authDomain: "medicare-73a2a.firebaseapp.com",
  projectId: "medicare-73a2a",
  storageBucket: "medicare-73a2a.appspot.com",
  messagingSenderId: "50251165588",
  appId: "1:50251165588:web:a88bf2955bc9e37d972981",
  measurementId: "G-P2FNH034M9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();