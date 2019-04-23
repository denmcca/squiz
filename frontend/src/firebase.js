import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyArity268BQBhABpOX-1bUvnJFems2ADbs",
    authDomain: "squiz-1c0b4.firebaseapp.com",
    databaseURL: "https://squiz-1c0b4.firebaseio.com",
    projectId: "squiz-1c0b4",
    storageBucket: "squiz-1c0b4.appspot.com",
    messagingSenderId: "67028683741"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;