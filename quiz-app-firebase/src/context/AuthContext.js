import { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import "./../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  const signup = async (email, password, username) => {
    setLoading(true);
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      const user = await auth.currentUser;
      setUser({ ...user });
      setLoading(false);
      setIsError(false);
    } catch (error) {
      setLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  const login = async (email, password) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    setUser({ ...user });
    console.log(user);
  };

  const signout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  const value = {
    signup,
    login,
    signout,
    loading,
    isError,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
