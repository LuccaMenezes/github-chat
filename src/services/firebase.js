import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyA3uyyWwdWJG9mb8xV2JqPUt3z1Fu8vcDs",
   authDomain: "git-chat-5c763.firebaseapp.com",
   projectId: "git-chat-5c763",
   storageBucket: "git-chat-5c763.appspot.com",
   messagingSenderId: "34456335547",
   appId: "1:34456335547:web:8ecc869d5867990772259e"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { db, auth, provider };