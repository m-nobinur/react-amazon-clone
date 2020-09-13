import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBnG7zgDW_dxwdSOGwL-U8fMszJaZU-o2k",
    authDomain: "mart-20.firebaseapp.com",
    databaseURL: "https://mart-20.firebaseio.com",
    projectId: "mart-20",
    storageBucket: "mart-20.appspot.com",
    messagingSenderId: "866007377660",
    appId: "1:866007377660:web:b30128c025605b208f1979",
    measurementId: "G-1CL43GGF1R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};