// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDF-6KO078_j1gcd4B0unVX6fREB5vIsOU",
	authDomain: "todoist-clone-4bd37.firebaseapp.com",
	projectId: "todoist-clone-4bd37",
	storageBucket: "todoist-clone-4bd37.appspot.com",
	messagingSenderId: "828500160458",
	appId: "1:828500160458:web:4ff633a23f1271b9c42933",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app as firebase };
