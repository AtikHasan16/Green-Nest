import React, { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Config/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(currentUser);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const updateUserProfile = (userName, userPhoto, userEmail) => {
    setCurrentUser({
      ...currentUser,
      displayName: userName,
      photoURL: userPhoto,
      email: userEmail,
    });
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhoto,
      email: userEmail,
    });
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const passReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  const deleteCurrentUser = () => {
    return deleteUser(auth.currentUser);
  };
  const authInfo = {
    createNewUser,
    signInUser,
    currentUser,
    googleLogin,
    updateUserProfile,
    passReset,
    logOutUser,
    deleteCurrentUser,
    loading,
    setLoading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
