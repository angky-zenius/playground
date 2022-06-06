// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDEvlsM8lMMNlS1xMi9kpTxUvgPGHrNF8",
  authDomain: "zenius-notification.firebaseapp.com",
  projectId: "zenius-notification",
  storageBucket: "zenius-notification.appspot.com",
  messagingSenderId: "917764688812",
  appId: "1:917764688812:web:6e6991c672674f8c590809",
  measurementId: "G-KWFGSZZ70J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function testLogin() {
    
}