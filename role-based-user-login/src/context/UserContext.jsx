/* eslint-disable react/prop-types */
import { signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const UserContext = createContext("");

export const UserContextProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState({
    isError: false,
    message: null,
  });
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState([]);

  const login = async (userRole, email, password) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      const curUser = auth.currentUser;
      const tempArray = [];
      await getDocs(collection(db, "users")).then((querySnapshot) => {
        const newUserData = querySnapshot.docs.filter(
          (doc) => doc.id === curUser.uid
        )[0];
        tempArray.push(newUserData.data());
        setNewUser(tempArray);
        loadUser(userRole, newUserData.data());
      });
    } catch (error) {
      setNewUser([]);
      setErrorMessage({
        isError: true,
        message: error.message,
      });

      setLoading(false);
    }
  };

  const loadUser = (userRole, user) => {
    if (user.role === userRole) {
      setErrorMessage({
        isError: false,
        message: null,
      });

      setLoading(false);
      if (user.role === "admin") {
        setNewUser(user);
      } else {
        setNewUser(user);
      }
    } else {
      setNewUser([]);
      setLoading(false);
      setErrorMessage({
        isError: true,
        message: "Invalid user or unauthorized access.",
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        newUser,
        errorMessage,
        loading,
        login,
        setNewUser,
        setErrorMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
