import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import ChatContainer from "./Components/ChatContainer";
import Navbar from "./Components/Navbar";

import { createContext, useState } from "react";
export const AppState = createContext();

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const App = () => {
  const [user, setUser] = useState("");
  const [signedIn, isSignedIn] = useState("false");

  const userSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        isSignedIn(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const userSignOut = async () => {
    signOut(auth)
      .then(() => {
        isSignedIn(false);
        // alert("You have signed out successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  onAuthStateChanged(auth, (user) => {
    user ? (setUser(user), isSignedIn(true)) : isSignedIn(false);
  });

  return (
    <AppState.Provider value={{ user, userSignIn, signedIn, userSignOut }}>
      <div className="h-screen bg-gray-800 overflow-hidden">
        <Navbar />
        <ChatContainer />
      </div>
    </AppState.Provider>
  );
};
export default App;
