// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBATpsgyYrYiUJ3tTkZivxXVFQnm3pmOHQ",
  authDomain: "my-first-project-2adff.firebaseapp.com",
  projectId: "my-first-project-2adff",
  storageBucket: "my-first-project-2adff.appspot.com",
  messagingSenderId: "546958611484",
  appId: "1:546958611484:web:12893b484ce7806535bbd9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 

export const orderCollections = collection(db, 'orders')

export const productsCollection = collection(db, 'products')