import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";

import {getDatabase }from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

import { getDatabase }from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const db = getDatabase(app);

export { db };
const firebaseConfig = {
  apiKey: "AIzaSyDVYmmWJHEiNtQCroj393lLEpgGaW_h0mM",
  authDomain: "e-learning-epi.firebaseapp.com",
  databaseURL: "https://e-learning-epi-default-rtdb.firebaseio.com",
  projectId: "e-learning-epi",
  storageBucket: "e-learning-epi.firebasestorage.app",
  messagingSenderId: "814946403235",
  appId: "1:814946403235:web:257e305f822cf5d3cad016",
  measurementId: "G-7KKQMNE0JX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);

export { db };
