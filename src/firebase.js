 import { initializeApp } from "firebase/app";
import { 
    getFirestore,
} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAUaLFXXOZWhArEr4R25qe6zKhG7Wnn9ug",
    authDomain: "twitter-clone-shan.firebaseapp.com",
    projectId: "twitter-clone-shan",
    storageBucket: "twitter-clone-shan.appspot.com",
    messagingSenderId: "974724036413",
    appId: "1:974724036413:web:c197ad283e8930ec80b754"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;