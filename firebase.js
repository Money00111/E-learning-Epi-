import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVYmmWJHEiNtQCroj393lLEpgGaW_h0mM",
  authDomain: "e-learning-epi.firebaseapp.com",
  databaseURL: "https://e-learning-epi-default-rtdb.firebaseio.com",
  projectId: "e-learning-epi",
  storageBucket: "e-learning-epi.firebasestorage.app",
  messagingSenderId: "814946403235",
  appId: "1:814946403235:web:257e305f822cf5d3cad016"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
