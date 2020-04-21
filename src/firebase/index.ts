import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCThhQsdRX40fIJ-2ub1Y8AQkzHcIQcrAA',
  authDomain: 'projecty-cb600.firebaseapp.com',
  databaseURL: 'https://projecty-cb600.firebaseio.com',
  projectId: 'projecty-cb600',
  storageBucket: 'projecty-cb600.appspot.com',
  messagingSenderId: '880481276559',
  appId: '1:880481276559:web:234a2c1155d905748696fa',
  measurementId: 'G-G6P6T8KS3Y',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
