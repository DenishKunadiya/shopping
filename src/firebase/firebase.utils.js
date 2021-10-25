import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
    apiKey: "AIzaSyBwamSukT2DNK6Pl1T8d67Xxq25B3S-ZRk",

    authDomain: "crown-db-d77a0.firebaseapp.com",

    projectId: "crown-db-d77a0",

    storageBucket: "crown-db-d77a0.appspot.com",

    messagingSenderId: "958233686057",

    appId: "1:958233686057:web:8826dfe53aaf1d281bac38",

    measurementId: "G-JRBNCNLL9V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;