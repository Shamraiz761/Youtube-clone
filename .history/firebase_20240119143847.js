// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqcr3IEHKBT2EImxQM3DTMW8br3NcxNXU",
  authDomain: "clone-68a92.firebaseapp.com",
  projectId: "clone-68a92",
  storageBucket: "clone-68a92.appspot.com",
  messagingSenderId: "749039203576",
  appId: "1:749039203576:web:0e20e11facd35a5a23b70d",
  measurementId: "G-RNFG9TG34X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();
const analytics = getAnalytics(app);

expo