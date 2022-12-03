import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCm0eez-NMYH7vtxFoKZxU-qW8eFiMzTA0",
  authDomain: "cloneapp-80b30.firebaseapp.com",
  projectId: "cloneapp-80b30",
  storageBucket: "cloneapp-80b30.appspot.com",
  messagingSenderId: "275608487338",
  appId: "1:275608487338:web:2b7ff6c366b2ae1ceb17d3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
