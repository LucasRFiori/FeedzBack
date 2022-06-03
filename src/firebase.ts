import * as firebase from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvrKWtZPsMfrpUBaHjMVufdfKLU8A5J9I",
  authDomain: "feedzback-ea570.firebaseapp.com",
  projectId: "feedzback-ea570",
  storageBucket: "feedzback-ea570.appspot.com",
  messagingSenderId: "105195681134",
  appId: "1:105195681134:web:248aa8018d73da799b3d7f",
  measurementId: "G-QV514X7N31"
};

firebase.initializeApp(firebaseConfig)

export const auth = getAuth();
export const db = getFirestore();
