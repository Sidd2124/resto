import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWszu4wAuYKM-Ep0cxz6NlnUY1rIbKnwQ",
  authDomain: "hotel-a8c57.firebaseapp.com",
  projectId: "hotel-a8c57",
  storageBucket: "hotel-a8c57.appspot.com",
  messagingSenderId: "720450492590",
  appId: "1:720450492590:web:a5f41156afbfc1a18d753f"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;
