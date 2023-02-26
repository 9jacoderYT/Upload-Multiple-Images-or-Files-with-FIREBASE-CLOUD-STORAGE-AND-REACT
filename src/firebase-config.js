// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyC8f5LCDoPWxK22YkvoEo4Cd2euKcVmYwc",
  authDomain: "jacoder-8cc28.firebaseapp.com",
  projectId: "jacoder-8cc28",
  storageBucket: "jacoder-8cc28.appspot.com",
  messagingSenderId: "326092150571",
  appId: "1:326092150571:web:d057e9d0d7ec8bced6976e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

