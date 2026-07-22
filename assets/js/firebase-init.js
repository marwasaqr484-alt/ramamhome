// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Configuration الخاصة بـ ramamhome1
const firebaseConfig = {
  apiKey: "AIzaSyCH6ZZxYn3iEDuX_U2R_9oPRMNrahZY0RQ",
  authDomain: "ramamhome1.firebaseapp.com",
  projectId: "ramamhome1",
  storageBucket: "ramamhome1.firebasestorage.app",
  messagingSenderId: "569655228341",
  appId: "1:569655228341:web:8b9946180ce32b52e88bfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);