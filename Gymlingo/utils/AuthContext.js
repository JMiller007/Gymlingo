// utils/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (data) => {
    // Implement your signIn logic here and set the user
    // For demo purposes, we'll just mock an authenticated user
    setUser({ id: '1', email: data.email });
  };

  const signOut = () => {
    // Implement signOut logic here
    setUser(null);
  };

  const signUp = async (data) => {
    // Implement your signUp logic here
    // For demo purposes, we'll just mock a new user registration
    setUser({ id: '2', email: data.email });
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
