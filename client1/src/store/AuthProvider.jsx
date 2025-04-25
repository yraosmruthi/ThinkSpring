import React, { createContext, useContext, useState, useEffect } from "react";

const URL = 'http://localhost:3000/auth/user';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const storeInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const isLoggedIn = !!token;

  const logoutUser =  () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const Authentication = async () => {
    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        console.log(data.user);
      } else {
        console.warn("Authentication failed with status:", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(token){
      Authentication();
    }
  }, [token]); // Dependency on `token` to refresh when it changes

  return (
    <AuthContext.Provider value={{ storeInLS, logoutUser, isLoggedIn, Authentication,user}}>
      {children}
    </AuthContext.Provider>
  );
};

// Ensure the export is at the top level
export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of provider");
  }
  return AuthContextValue;
};

export default AuthProvider;
