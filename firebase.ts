import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCd40JtbDghOKrYiaW2ZFk6xD4HOFFyQ-o",
    authDomain: "unihack-2022.firebaseapp.com",
    projectId: "unihack-2022",
    storageBucket: "unihack-2022.appspot.com",
    messagingSenderId: "684462232584",
    appId: "1:684462232584:web:a1be4e4ac3a4d09e4aedbd",
    measurementId: "G-G7WZSRD55X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 