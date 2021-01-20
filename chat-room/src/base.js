import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyCUv1dnJCA427BysryWeVwjfJIJ-LskJi4",
    authDomain: "chat-room-3c2db.firebaseapp.com",
    projectId: "chat-room-3c2db",
    storageBucket: "chat-room-3c2db.appspot.com",
    messagingSenderId: "343572031735",
    appId: "1:343572031735:web:b72ca2923a438cd753cbf2"
  }
);

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;