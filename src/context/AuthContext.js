import { createContext, useState } from "react";
import { AuthService } from "../services/api/Auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const dataUser = localStorage.getItem("dataUser");
    return dataUser ? JSON.parse(dataUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const login = async () => {
    try {
      const response = await AuthService.login(user);
      localStorage.setItem("dataUser", JSON.stringify(response.user));
      localStorage.setItem("token", response.token);
      setUser(user);
      setToken(token);
    } catch (error) {
      console.error("Error en el login: ", error);
      setUser(null);
      setToken(null);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("dataUser");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  const values = {
    user,
    login,
    logout,
    token,
    isAuthenticated: !!user && !!token,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
