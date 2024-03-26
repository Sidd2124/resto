import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNyLINM-R9yHXcXRGvMjsB9xxWYJ8ElgE",
  authDomain: "food-f09ca.firebaseapp.com",
  projectId: "food-f09ca",
  storageBucket: "food-f09ca.appspot.com",
  messagingSenderId: "605348177414",
  appId: "1:605348177414:web:4d0d4400199f82ac4d4587"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;
