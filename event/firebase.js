// Import the functions you need from the SDKs you need

const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASonW4BtUeFuDeoOonR7iCzfUArGXURZQ",
  authDomain: "zentest-640a1.firebaseapp.com",
  projectId: "zentest-640a1",
  storageBucket: "zentest-640a1.appspot.com",
  messagingSenderId: "78613539868",
  appId: "1:78613539868:web:b7071e1801207d2c7e03d9",
  measurementId: "G-99MYNY5KH0"
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
  signInWithEmailAndPassword(auth, "zenpro-notif-dispatcher@zentest-640a1.iam.gserviceaccount.com", "p4ssw0rd")
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
    });
}

testLogin();