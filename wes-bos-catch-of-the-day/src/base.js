import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvQyXC53Dy7C1ZA_CXpMXh7no-qFKzcO0",
  authDomain: "catch-of-the-day-db88f.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-db88f-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());


export {firebaseApp};  
export default base;
