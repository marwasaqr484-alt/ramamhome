// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFghaqjMzytqRtlWcy1IZ2okvWYMnKdFc",
  authDomain: "invoiceapp-7e09c.firebaseapp.com",
  projectId: "invoiceapp-7e09c",
  storageBucket: "invoiceapp-7e09c.firebasestorage.app",
  messagingSenderId: "651433272123",
  appId: "1:651433272123:web:97830bda9d36705030cd1e",
  measurementId: "G-TZ0SCY481T"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
