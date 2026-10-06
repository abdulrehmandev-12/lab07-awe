import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const savedLogin = localStorage.getItem("loggedIn");
    return savedLogin === "true";
  });

  const loginLogout = (value) => {
    setLoggedIn(value);
    localStorage.setItem("loggedIn", value);
  };

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn: loginLogout }}>
      {children}
    </UserContext.Provider>
  );
};