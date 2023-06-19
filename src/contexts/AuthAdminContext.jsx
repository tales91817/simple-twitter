import { checkAdminPermission, adminLogin } from "../api/auth";
import { createContext, useContext, useEffect, useState } from 'react';
import * as jwt from 'jsonwebtoken';
import { useLocation } from "react-router-dom";
// import { Navigate, useLocation } from 'react-router-dom';

const defaultAuthAdminContext = {
  isAdminAuthenticated: false,
  currentAdmin: {},
  adminLogin: null,
  adminLogout: null,
};

const AuthAdminContext = createContext(defaultAuthAdminContext);
export const useAuthAdmin = () => useContext(AuthAdminContext); // 這邊的 useAuth 可在所有頁面/元件內掛載，以取得 變數 isAdminAuthenticated, currentAdmin 的值以及 adminLogin, adminLogout 等 function
export const AuthAdminProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const { pathName } = useLocation()

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        setIsAdminAuthenticated(false)
        setPayload(null)
        return
      }
      const result = await checkAdminPermission(authToken);
      if (result) {
        setIsAdminAuthenticated(true);
        const tempPayload = jwt.decode(authToken);
        setPayload(tempPayload);
      }else{
        setIsAdminAuthenticated(false);
        setPayload(null);
      }
    };
    checkTokenIsValid();
  }, [pathName]);



  return (
    <AuthAdminContext.Provider
      value={{
        isAdminAuthenticated,
        currentAdmin: payload && {
          id: payload.id,
          name: payload.name,
          email: payload.email,
          account: payload.account
        },

        adminLogin: async (giveInData) => {
          const {
            success,
            message,
            authToken,
            data,
          } = await adminLogin({
            account: giveInData.account,
            password: giveInData.password,
          });

          const tempPayload = jwt.decode(authToken);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAdminAuthenticated(true);
            localStorage.setItem("authToken", authToken);
            console.log("現在有權限喔^^");
          
          } else {
            setPayload(null);
            setIsAdminAuthenticated(false);
            console.log('現在沒權限了><')
          }
          return {success, message, data};
        },

        adminLogout: () => {
          localStorage.removeItem("authToken");
          setPayload(null);
          setIsAdminAuthenticated(false);
          console.log(`isAdminAuthenticated狀態：${isAdminAuthenticated}`)
        },
      }}
    >
      {children}
    </AuthAdminContext.Provider>
  );
};