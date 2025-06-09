// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqw1y2rJ816JtGdN-mC0j7R0QayuJgL8g",
  authDomain: "shopee-46cb5.firebaseapp.com",
  projectId: "shopee-46cb5",
  storageBucket: "shopee-46cb5.firebasestorage.app",
  messagingSenderId: "243522732706",
  appId: "1:243522732706:web:f2302197f5c110d7e54dfb",
  measurementId: "G-V6VF56C5B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);