import firebase from 'firebase';
import 'firebase/firestore'; 

firebase.initializeApp({
    apiKey: "AIzaSyC8UzLH534Bk5FsusZCXRdfWb8e_X9sqtc",
    authDomain: "house-85840.firebaseapp.com",
    projectId: "house-85840",
    storageBucket: "house-85840.appspot.com",
    messagingSenderId: "960855842819",
    appId: "1:960855842819:web:d71d9405854eb2e5d22e36",
    measurementId: "G-WTXXSP4FSS"
});

const db = firebase.firestore(); 

export default {
    firebase, db
}