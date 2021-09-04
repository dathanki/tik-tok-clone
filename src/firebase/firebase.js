import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDviC4qcElps95GaTPKJaB5e_FrCxceRxU",
    authDomain: "tik-tok-clone-a983c.firebaseapp.com",
    projectId: "tik-tok-clone-a983c",
    storageBucket: "tik-tok-clone-a983c.appspot.com",
    messagingSenderId: "423538553870",
    appId: "1:423538553870:web:c691942c94553d1f3bb85f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;