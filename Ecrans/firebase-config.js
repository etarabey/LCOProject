import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const FirebaseConfig = {
    apiKey: "AIzaSyCFThskWhOsYRwPLSTQNZKEuz-NZ9UdHAs", 
    authDomain: "lcoprojectv2.firebaseapp.com",
    projectId: "lcoprojectv2",
    storageBucket: "lcoprojectv2.appspot.com",
    messagingSenderId: "1065697500341",
    appId: "1:1065697500341:web:1a8cdd84ab44ad84ba32fc",
    measurementId: "G-JF1D7TNHMX"
}; 

const firebaseinit = firebase.initializeApp(FirebaseConfig);


export {firebaseinit}; 