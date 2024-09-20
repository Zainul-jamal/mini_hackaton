
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import {getFirestore  } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBf4Gzk6WqYFAANtS1MN0XFnPH-vPRAmag",
    authDomain: "smittestptactice.firebaseapp.com",
    projectId: "smittestptactice",
    storageBucket: "smittestptactice.appspot.com",
    messagingSenderId: "610819138046",
    appId: "1:610819138046:web:b87e56106081fb331a60af",
    measurementId: "G-HRDW5Q37J9"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);

