import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  addDoc 
} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB47xksvQ8b_nG_EzsDDaczmQ3qljnQ8q8",
  authDomain: "netflix-clone-21103.firebaseapp.com",
  projectId: "netflix-clone-21103",
  storageBucket: "netflix-clone-21103.appspot.com", // fixed domain suffix (.app → .appspot.com)
  messagingSenderId: "821513891969",
  appId: "1:821513891969:web:ec849cb262f5768bd19d80"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
   toast.error(error.code.split('/')[1].split('-').join(" "));

  }
};



const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
