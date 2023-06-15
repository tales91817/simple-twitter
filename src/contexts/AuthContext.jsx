import { checkPermission, login, register } from 'api/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import * as jwt from 'jsonwebtoken';
import { Navigate, useLocation } from 'react-router-dom';

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null,
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext); // 這邊的 useAuth 可在所有頁面/元件內掛載，以取得 變數 isAuthenticated, currentMember 的值以及 register, login, logout 等 function
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);

  const { pathName } =useLocation()

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        isAuthenticated(false)
        setPayload(null)
        return
      }
      const result = await checkPermission(authToken);
      if (result) {
        isAuthenticated(true);
        const tempPayload = jwt.decode(authToken)
        setPayload(tempPayload);
      }else{
        isAuthenticated(false);
        setPayload(null);
      }
    };

    checkTokenIsValid();
  }, [pathName]);



  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentMember: payload && {
          id: payload.id,
          name: payload.name,
        },
        register: async (data) => {
          const {
            status,
            data: { token: authToken },
          } = await register({
            name: data.name,
            account: data.account,
            email: data.email,
            password: data.password,
            checkPassword: data.checkPassword,
          });
          const tempPayload = jwt.decode(authToken);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem("authToken", authToken);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return status;
        },

        login: async (data) => {
          const {
            status,
            data: { token: authToken },
          } = await login({
            account: data.account,
            password: data.password,
          });
          const tempPayload = jwt.decode(authToken);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem("authToken", authToken);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return status;
        },

        logout: () => {
          localStorage.removeItem("authToken");
          setPayload(null);
          setIsAuthenticated(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};