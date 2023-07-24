// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC7ZliZOE64iA9japex3lrRCEn7nyic4hw",
    authDomain: "react-native-49c3d.firebaseapp.com",
    databaseURL: "https://react-native-49c3d-default-rtdb.firebaseio.com",
    projectId: "react-native-49c3d",
    storageBucket: "react-native-49c3d.appspot.com",
    messagingSenderId: "1089596846597",
    appId: "1:1089596846597:web:9ee84631d2397e65b4a26c",
    measurementId: "G-XE2V3MKQ19"
  };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);