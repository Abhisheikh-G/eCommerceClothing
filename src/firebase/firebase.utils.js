import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAPUVBl6b75XqprRhLC5y-JzOwLp5ugTP8",
  authDomain: "crwn-db-4d767.firebaseapp.com",
  databaseURL: "https://crwn-db-4d767.firebaseio.com",
  projectId: "crwn-db-4d767",
  storageBucket: "",
  messagingSenderId: "940034520886",
  appId: "1:940034520886:web:640bd0ec2659467e402597"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
