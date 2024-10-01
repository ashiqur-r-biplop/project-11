// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQib4E5KXQ00RHM2WvNS6cYvNXO7vZlGU",
  authDomain: "job-portal-4da2c.firebaseapp.com",
  projectId: "job-portal-4da2c",
  storageBucket: "job-portal-4da2c.appspot.com",
  messagingSenderId: "544943962386",
  appId: "1:544943962386:web:4fbf8962117fc9d6c05bcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;