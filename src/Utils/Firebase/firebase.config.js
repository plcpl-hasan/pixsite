import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    projectId: process.env.REACT_APP_FIREBASE_projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// apiKey: "AIzaSyDMr5HLycJUPEZrypzfEpjbAV3mfp04S4o",
// authDomain: "simple-firebase-authenti-df195.firebaseapp.com",
// projectId: "simple-firebase-authenti-df195",
// storageBucket: "simple-firebase-authenti-df195.appspot.com",
// messagingSenderId: "1031593440355",
// appId: "1:1031593440355:web:361d76e2cb42ea3fecf456",