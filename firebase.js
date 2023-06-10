import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCVriNWz5I4Fe31f60HPcUoql3Ru-YbIvM",
    authDomain: "e-commerce-2c4a9.firebaseapp.com",
    projectId: "e-commerce-2c4a9",
    storageBucket: "e-commerce-2c4a9.appspot.com",
    messagingSenderId: "524922475399",
    appId: "1:524922475399:web:9f5372349c42df94383922",
    measurementId: "G-0ERB6QDZL6"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
