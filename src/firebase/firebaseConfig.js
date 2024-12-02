// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf9y859UQm0fzASAVBGy7PvaQGOH709EU",
  authDomain: "coffee-store-5b13c.firebaseapp.com",
  projectId: "coffee-store-5b13c",
  storageBucket: "coffee-store-5b13c.firebasestorage.app",
  messagingSenderId: "923324543125",
  appId: "1:923324543125:web:4e182189ad90dabf466b9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
