import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyDQZrJgYAjlXdCeDDxa1LEf7cTqzsvQXCA",
    authDomain: "resolution-list-2e54a.firebaseapp.com",
    databaseURL: "https://resolution-list-2e54a-default-rtdb.firebaseio.com",
    
  }
);

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;