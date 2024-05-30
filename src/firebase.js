import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF4EqhcaNV0FvL718mggqWSBnJrxh4m9M",
  authDomain: "fitness-assistant-1033c.firebaseapp.com",
  projectId: "fitness-assistant-1033c",
  storageBucket: "fitness-assistant-1033c.appspot.com",
  messagingSenderId: "1093016696694",
  appId: "1:1093016696694:web:cd73c84e297bb649442c57",
  databaseURL:
    "https://fitness-assistant-1033c-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};
