import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    accountType: null, // 'user' atau 'company'
  });

  const login = (accountType) => {
    setUser({ isLoggedIn: true, accountType });
  };

  const logout = () => {
    setUser({ isLoggedIn: false, accountType: null });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
