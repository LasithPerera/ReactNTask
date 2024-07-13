// firebase.js
import firebase from '@react-native-firebase/app'; 
import auth from '@react-native-firebase/auth'; 

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, auth }; 