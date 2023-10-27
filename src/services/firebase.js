// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM7radrbD32GC6Q900MezTxtaVuqgj2Y0",
  authDomain: "showcase-yuk.firebaseapp.com",
  projectId: "showcase-yuk",
  storageBucket: "showcase-yuk.appspot.com",
  messagingSenderId: "475409489257",
  appId: "1:475409489257:web:500b455280e2b7c9a0f1f8",
  measurementId: "G-94XF0MM0XE"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();

export {auth, githubProvider}
