// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
// const app = initializeApp(firebaseConfig);
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyApnO31f5ayv-Ednqe47T0FcVV0piqz72s',
  authDomain: 'auth-fermer.firebaseapp.com',
  databaseURL:
    'https://auth-fermer-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'auth-fermer',
  storageBucket: 'auth-fermer.appspot.com',
  messagingSenderId: '549483513384',
  appId: '1:549483513384:web:0dd0a6f655d03b554f171d',
};
const app = initializeApp(firebaseConfig);
