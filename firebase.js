// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

 const firebaseConfig = {
  apiKey: "AIzaSyCH6ZZxYn3iEDuX_U2R_9oPRMNrahZY0RQ",
  authDomain: "ramamhome1.firebaseapp.com",
  projectId: "ramamhome1",
  storageBucket: "ramamhome1.firebasestorage.app",
  messagingSenderId: "569655228341",
  appId: "1:569655228341:web:8b9946180ce32b52e88bfc"
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
