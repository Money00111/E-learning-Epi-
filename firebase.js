import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "SHYIRAMO_API_KEY_YAWE",
  authDomain: "SHYIRAMO_AUTH_DOMAIN",
  databaseURL: "SHYIRAMO_DATABASE_URL",
  projectId: "SHYIRAMO_PROJECT_ID",
  storageBucket: "SHYIRAMO_STORAGE_BUCKET",
  messagingSenderId: "SHYIRAMO_SENDER_ID",
  appId: "SHYIRAMO_APP_ID"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
