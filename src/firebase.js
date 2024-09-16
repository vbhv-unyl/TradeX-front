import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZ85lYNvU7H1MX_odJX8TMO1vZi_RgLr4",
  authDomain: "fir-app-c7b82.firebaseapp.com",
  databaseURL: "https://fir-app-c7b82-default-rtdb.firebaseio.com",
  projectId: "fir-app-c7b82",
  storageBucket: "fir-app-c7b82.appspot.com",
  messagingSenderId: "369827543546",
  appId: "1:369827543546:web:66fae6e62c89e71bea4c43"
};

export const app = initializeApp(firebaseConfig);