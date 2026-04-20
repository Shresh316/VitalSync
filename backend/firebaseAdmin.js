import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

let app;
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DB_URL
  });
} else {
  app = admin.app();
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth, admin };
