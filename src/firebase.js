import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAlCUEfDYTdnaYoOtIQ-o8cU0bSigjWk1k",
    authDomain: "react-todo-4649a.firebaseapp.com",
    databaseURL: "https://react-todo-4649a.firebaseio.com",
    projectId: "react-todo-4649a",
    storageBucket: "react-todo-4649a.appspot.com",
    messagingSenderId: "930484674768",
    appId: "1:930484674768:web:1540fda55156b6052c3ed5"
  };


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
