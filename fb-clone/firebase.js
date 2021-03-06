import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdcgyleAJbGejFp61GNCQ-wbhbe0VuBTg",
  authDomain: "fb-clone-b9d55.firebaseapp.com",
  projectId: "fb-clone-b9d55",
  storageBucket: "fb-clone-b9d55.appspot.com",
  messagingSenderId: "783821209488",
  appId: "1:783821209488:web:8a23f41f6c265c6dfdbd15",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
