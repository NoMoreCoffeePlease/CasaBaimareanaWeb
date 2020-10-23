import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCl3brjRuXdpY4GilenljnIHM-sXlK6560",
  authDomain: "casabaimareana-d7f94.firebaseapp.com",
  databaseURL: "https://casabaimareana-d7f94.firebaseio.com",
  projectId: "casabaimareana-d7f94",
  storageBucket: "casabaimareana-d7f94.appspot.com",
  messagingSenderId: "869978016854",
  appId: "1:869978016854:web:54c447c7d93227c9d1bff7",
  measurementId: "G-67VBMZZ83J",
});

const FieldValue = firebase.firestore.FieldValue;

let db = firebase.firestore();

export default { FieldValue, firebase, db };
