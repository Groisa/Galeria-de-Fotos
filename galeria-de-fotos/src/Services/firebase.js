
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAjVojY655r0__0HBMLVf2cb_l2B7i5IHg",
  authDomain: "fotosgaleriagroisa.firebaseapp.com",
  projectId: "fotosgaleriagroisa",
  storageBucket: "fotosgaleriagroisa.appspot.com",
  messagingSenderId: "135102000495",
  appId: "1:135102000495:web:ce50db47bddc4d7effcc9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)