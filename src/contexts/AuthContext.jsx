import { checkPermission, register, login } from "api/auth";
import { createContext, useContext, useEffect, useState } from 'react';
import * as jwt from 'jsonwebtoken';
import { useLocation } from 'react-router-dom';
// import { Navigate, useLocation } from 'react-router-dom';

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: {},
  register: null,
  login: null,
  adminLogin: null,
  logout: null,
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext); // 這邊的 useAuth 可在所有頁面/元件內掛載，以取得 變數 isAuthenticated, currentMember 的值以及 register, login, logout 等 function
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const { pathName } = useLocation()

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {                         //////這邊判斷有authToken
        setIsAuthenticated(false)
        setPayload(null)
        return
      }
      const result = await checkPermission(authToken);/////這邊判斷result = undefined
      if (result) {
        setIsAuthenticated(true);
        const tempPayload = jwt.decode(authToken);
        setPayload(tempPayload);
      }else{
        setIsAuthenticated(false);
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
          email: payload.email,
          account: payload.account,
        },
        register: async (data) => {
          const {
            // status,
            success,
            message,
            // data: { token: authToken },
            // authToken
          } = await register({
            name: data.name,
            account: data.account,
            email: data.email,
            password: data.password,
            checkPassword: data.checkPassword,
          });

          // const tempPayload = jwt.decode(authToken);
          // if (tempPayload) {
          //   setPayload(tempPayload);
          //   setIsAuthenticated(true);
          //   localStorage.setItem("authToken", authToken);
          //   console.log("現在有權限喔^^");
          // } else {
          //   setPayload(null);
          //   setIsAuthenticated(false);
          //   console.log("現在沒權限了><");
          // }
          return { success, message };
        },

        login: async (giveInData) => {
          const {
            // status,
            success,
            message,
            // error,
            authToken,
            data,
          } = await login({
            account: giveInData.account,
            password: giveInData.password,
          });
          //   if (successData) {
          //  const { token: authToken } = successData;

          const tempPayload = jwt.decode(authToken);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            localStorage.setItem("authToken", authToken);
            console.log("現在有權限喔^^");
          } else {
            setPayload(null);
            setIsAuthenticated(false);
            console.log("現在沒權限了><");
          }
          return { success, message, data };
        },

        logout: () => {
          localStorage.removeItem("authToken");
          setPayload(null);
          setIsAuthenticated(false);
          console.log(`isAuthenticated狀態：${isAuthenticated}`);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};