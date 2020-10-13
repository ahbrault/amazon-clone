import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZ8ZvxikYnGzqV_-UaB8ThCIXD-oh9Zxo",
    authDomain: "clone-e8bb8.firebaseapp.com",
    databaseURL: "https://clone-e8bb8.firebaseio.com",
    projectId: "clone-e8bb8",
    storageBucket: "clone-e8bb8.appspot.com",
    messagingSenderId: "602287196961",
    appId: "1:602287196961:web:a2d21662e3ea9d7b98cc60",
    measurementId: "G-KXDV99E9DD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};