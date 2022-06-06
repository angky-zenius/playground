// Import the functions you need from the SDKs you need

const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
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

/*
export declare interface User extends UserInfo {
  readonly emailVerified: boolean;
  readonly isAnonymous: boolean;
  readonly metadata: UserMetadata;
  readonly providerData: UserInfo[];
  readonly refreshToken: string;
  readonly tenantId: string | null;
  getIdToken(forceRefresh?: boolean): Promise<string>;
  getIdTokenResult(forceRefresh?: boolean): Promise<IdTokenResult>;
}
*/

function testLogin() {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, "angky.putra@zeniuseducation.com", "p4ssw0rd")
    .then((userCredential) => {
      const emailVerified = userCredential.user.emailVerified;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
    });
}

testLogin();