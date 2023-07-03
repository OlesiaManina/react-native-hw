// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-jH1wPYhUfzvfCjmThCW6VsRSi7bab_4",
  authDomain: "rn-social-2c7aa.firebaseapp.com",
  projectId: "rn-social-2c7aa",
  storageBucket: "rn-social-2c7aa.appspot.com",
  messagingSenderId: "357958822413",
  appId: "1:357958822413:web:a4ec979db1ffdde2f84344",
  measurementId: "G-VPM53QFXZ5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


