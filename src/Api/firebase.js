import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUD2e3txX4VwYGw2pX2z1Qux-bPvAJRgg",
    authDomain: "postsapp-7dee3.firebaseapp.com",
    projectId: "postsapp-7dee3",
    storageBucket: "postsapp-7dee3.appspot.com",
    messagingSenderId: "794601768256",
    appId: "1:794601768256:web:44e378a1ba6da7bda0e6a5"
  };
  
// Initialize Firebas
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);