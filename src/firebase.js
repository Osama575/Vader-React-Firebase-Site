import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDL4orgpzaqiZ0xpae-LcMdjXI7wCyTVVc",
    authDomain: "vader-50c96.firebaseapp.com",
    projectId: "vader-50c96",
    storageBucket: "vader-50c96.appspot.com",
    messagingSenderId: "243233324478",
    appId: "1:243233324478:web:ca4e22891773da8b840def"
  };
  
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
  
  export {firebase, db};
  