// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGtkCCWygr56XnKJG-YQHNhxr8w1kBID8",
  authDomain: "clone-f10e8.firebaseapp.com",
  databaseURL: "https://clone-f10e8.firebaseio.com",
  projectId: "clone-f10e8",
  storageBucket: "clone-f10e8.appspot.com",
  messagingSenderId: "708059731401",
  appId: "1:708059731401:web:c22502959c7663a219c418",
  measurementId: "G-VET4DZ1BJ7",
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
