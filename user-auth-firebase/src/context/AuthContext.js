import { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (email, password, username) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      const user = await auth.currentUser;
      setCurrentUser({ ...user });
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  const logIn = async (email, password) => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      setCurrentUser({ ...user });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  const logOut = () => {
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ signUp, loading, setLoading, currentUser, logIn, logOut, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
