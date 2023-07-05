// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import { enableLogging } from "firebase/database";

enableLogging(true);

const firebaseConfig = {
  apiKey: "AIzaSyAfqj0Rz4Fa6fKekE--V6CMloUB7A-_DoE",
  authDomain: "my-project-c5ecf.firebaseapp.com",
  projectId: "my-project-c5ecf",
  storageBucket: "my-project-c5ecf.appspot.com",
  messagingSenderId: "347800762447",
  appId: "1:347800762447:web:bc0f48fa85e0210f9d923a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


