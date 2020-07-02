import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCkuL851ltbLESSdT3yHSI-egsJ60Ain24",
  authDomain: "react-solo-app.firebaseapp.com",
  databaseURL: "https://react-solo-app.firebaseio.com",
  projectId: "react-solo-app",
  storageBucket: "react-solo-app.appspot.com",
  messagingSenderId: "855503487804",
  appId: "1:855503487804:web:f356ef28e2a6b0fc0f9439"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();