import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.VITE_API_KEY,
    authDomain: process.env.VITE_AUTH_DOMAIN,
    projectId: process.env.VITE_PROJECT_ID,
    storageBucket: process.env.VITE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_MESSAGING_SENDERID,
    appId: process.env.VITE_APP_ID,
    measurementId: process.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
// const analytics = getAnalytics(app);

export { app, db, auth };