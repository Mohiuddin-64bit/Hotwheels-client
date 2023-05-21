import  { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const googleSign = () => {
    return signInWithPopup(auth, googleProvider);
  };


  const createUser = (email, password, userName, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
  
        // Update the user's profile with the userName and photoURL
        return updateProfile(user, {
          displayName: userName,
          photoURL: photoURL,
        })
          .then(() => {
            setUser(user);
            return user;
          })
          .catch((error) => {
            throw new Error(error.message);
          });
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };
  

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe
    };
  }, []);


  const authInfo = {
    loading,
    user,
    createUser,
    signIn,
    logOut,
    googleSign,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
