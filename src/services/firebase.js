
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDaqpMBfiEjdMayRNpgQ9bjaH7wfubSY48",
  authDomain: "app-chat-react-44023.firebaseapp.com",
  projectId: "app-chat-react-44023",
  storageBucket: "app-chat-react-44023.appspot.com",
  messagingSenderId: "1000714652626",
  appId: "1:1000714652626:web:fcd5f236ae2b7fef95d60b",
  measurementId: "G-P41VX8R9CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();  