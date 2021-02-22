import firebase from 'firebase';

const firebaseConfig = {
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default }