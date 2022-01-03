
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyBRSIIEhGAw2Fewi1KXa1D88Vrej3-aOeI",
  authDomain: "app-chat-chatsofka.firebaseapp.com",
  databaseURL: "https://app-chat-chatsofka-default-rtdb.firebaseio.com",
  projectId: "app-chat-chatsofka",
  storageBucket: "app-chat-chatsofka.appspot.com",
  messagingSenderId: "242294604502",
  appId: "1:242294604502:web:d3a28e6f9a0938cd81ff77",
  measurementId: "G-7QZKYT7P90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();  