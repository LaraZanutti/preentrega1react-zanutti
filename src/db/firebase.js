import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAXEDUb1IOMJcnihtImThWi-VnqBkJgyAo",
    authDomain: "proyecto-final-react-66cb8.firebaseapp.com",
    projectId: "proyecto-final-react-66cb8",
    storageBucket: "proyecto-final-react-66cb8.appspot.com",
    messagingSenderId: "123889849796",
    appId: "1:123889849796:web:b4fdc6a7a2c5d66b5b8091"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)