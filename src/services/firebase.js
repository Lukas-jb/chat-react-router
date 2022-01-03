
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDwOC4kTw8ff6DNSyMBMoNBe80UDx-mNVY",
  authDomain: "app-chat-chatsofka-386a2.firebaseapp.com",
  databaseURL: "https://app-chat-chatsofka-386a2-default-rtdb.firebaseio.com",
  projectId: "app-chat-chatsofka-386a2",
  storageBucket: "app-chat-chatsofka-386a2.appspot.com",
  messagingSenderId: "448024008471",
  appId: "1:448024008471:web:452bf003d89af2cea30952",
  measurementId: "G-0R12SFJK0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();  