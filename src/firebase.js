import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPYtjOYLdnoU0HZ7NrQc9zzHdxQd-5J10",
    authDomain: "biba-c26d1.firebaseapp.com",
    projectId: "biba-c26d1",
    storageBucket: "biba-c26d1.appspot.com",
    messagingSenderId: "371373665962",
    appId: "1:371373665962:web:00dfe9dd96bd3e767fead3",
    measurementId: "G-TF70LYZL5B"
};

// Initialize Firebase App
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// export 
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
