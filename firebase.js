// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfvx1cigRlVDlMKT4dTNp8AF2_a9yfkvE",
  authDomain: "ramam-85e12.firebaseapp.com",
  projectId: "ramam-85e12",
  storageBucket: "ramam-85e12.firebasestorage.app",
  messagingSenderId: "202427188819",
  appId: "1:202427188819:web:edb78eacf649487f8f68a6",
  measurementId: "G-X1KQ8QM55T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addToCart(product) {
  try {
    await addDoc(collection(db, "cart"), product);
    alert("✅ تمت الإضافة إلى السلة");
  } catch (error) {
    alert("❌ حدث خطأ أثناء الإضافة");
    console.error(error);
  }
}
