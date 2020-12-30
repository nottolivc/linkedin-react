import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBdQnnMi0Ke24c-BHQmFylIfP-5CKW4keQ",
  authDomain: "linkedin-clone-react-ui.firebaseapp.com",
  projectId: "linkedin-clone-react-ui",
  storageBucket: "linkedin-clone-react-ui.appspot.com",
  messagingSenderId: "931448029904",
  appId: "1:931448029904:web:8c7bea63be9eb74cb454d5",
  measurementId: "G-1427SHT2BN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

