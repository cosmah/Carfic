import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD266LLGB_pNQ6S40nsNnSIFGfqatxI9_c",
  authDomain: "carfic.firebaseapp.com",
  projectId: "carfic",
  storageBucket: "carfic.appspot.com",
  messagingSenderId: "787624342978",
  appId: "1:787624342978:web:1026dc7cc08d053bcb125b",
  measurementId: "G-XPH5KC1XTZ",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };