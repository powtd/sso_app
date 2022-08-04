// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqOjjQvyxXkcAtjMQhGhxqiOlqop0bmB8",
  authDomain: "sso-app-60db3.firebaseapp.com",
  projectId: "sso-app-60db3",
  storageBucket: "sso-app-60db3.appspot.com",
  messagingSenderId: "204117757561",
  appId: "1:204117757561:web:1a9ebdd6dcff593eb50ea8",
  databaseURL:"https://sso-app-60db3-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);