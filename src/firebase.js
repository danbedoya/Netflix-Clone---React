import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDHb1K2W1cAw3DC13J63xtfO3_UinSXHQ0",
    authDomain: "netflix-clone-challenge-b2674.firebaseapp.com",
    projectId: "netflix-clone-challenge-b2674",
    storageBucket: "netflix-clone-challenge-b2674.appspot.com",
    messagingSenderId: "179298619578",
    appId: "1:179298619578:web:4b7d655a46ddeb0e77b283"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;