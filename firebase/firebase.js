import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC1qd4sxidT4qcOf-UKXiILcoYtdHLZLPs',
  authDomain: 'chatapp2023-e976b.firebaseapp.com',
  databaseURL:
    'https://chatapp2023-e976b-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'internalchatapp-e3a64',
  storageBucket: 'chatapp2023-e976b.appspot.com',
  appId: '1:733955430044:android:c5452a5231d8a316927f59',
  messagingSenderId: '733955430044',
};

// debugger

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();

// debugger

export {auth, firebaseDatabase};
