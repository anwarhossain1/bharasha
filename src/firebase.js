import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh-Mm8XHsU99-k6sVNJLQTYTEXmQyTocc",
  authDomain: "new-ecommerce-36789.firebaseapp.com",
  projectId: "new-ecommerce-36789",
  storageBucket: "new-ecommerce-36789.appspot.com",
  messagingSenderId: "389295742714",
  appId: "1:389295742714:web:a0b9664463701ce6383343",
  measurementId: "G-RNHS2KYH7D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
