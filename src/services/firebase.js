// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDW-qooLFwE2RUSsowm-fYuAoCuVas65no",

  authDomain: "trabajo-final-98a23.firebaseapp.com",

  projectId: "trabajo-final-98a23",

  storageBucket: "trabajo-final-98a23.appspot.com",

  messagingSenderId: "879447016534",

  appId: "1:879447016534:web:9dc79694eb218f374d67f7",

  databaseURL: "https://trabajo-final-98a23-default-rtdb.firebaseio.com/"

};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
