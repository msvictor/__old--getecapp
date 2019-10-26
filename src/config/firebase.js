import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAerEDhPUdxVE32h2cuKhkEer_1vdNusjM',
  authDomain: 'finapp-db-2cea9.firebaseapp.com',
  databaseURL: 'https://finapp-db-2cea9.firebaseio.com',
  projectId: 'finapp-db-2cea9',
  storageBucket: 'finapp-db-2cea9.appspot.com',
  messagingSenderId: '269650175320',
  appId: '1:269650175320:web:177a84ded05c40c480b12d',
  measurementId: 'G-PRQP2TBZNF',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default db = app.database();
