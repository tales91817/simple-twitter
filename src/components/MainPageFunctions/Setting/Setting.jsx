import React, { useEffect, useState } from "react";
import "./setting.scss";
import clsx from "clsx";

// const dummyUserInfo = {
//   id: 1,
//   account: "wonderwoman",
//   name: "Diana",
//   email: "diana@gmail.com",
//   password: "",
//   passwordComfirmation: "",
// };

//////////////////////////////////////////////////////////////////

const ConfigInput = ({
  type,
  label,
  value,
  placeholder,
  onChange,
  alertText,
  wordCount,
}) => {
  const wordCountClassName =
    value?.length > 0 ? "showWordCount" : "hideWordCount";

  return (
    <>
      <div
        className={clsx("authInputContainer", {
          authInputContainerError: alertText !== "",
        })}>
        <label className="authInputLabel">{label}</label>
        <input
          className="authInput"
          type={type || "text"}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange?.(event.target.value)}
        />
      </div>
      <div className="authInputMessageContainer">
        <div className="authInputAlertText">{alertText}</div>
        <div className={wordCountClassName}>{wordCount}</div>
      </div>
    </>
  );
};
export { ConfigInput };

///////////////////////////////////////////////////////

const Setting = ({
  alertText,
  onClick,
  account,
  name,
  email,
  password,
  checkPassword,
  setAccount,
  setUsername,
  setEmail,
  setPassword,
  setCheckPassword,
}) => {
  //   const [account, setAccount] = useState(dummyUserInfo.account);
  //   const [name, setUsername] = useState(dummyUserInfo.name);
  //   const [email, setEmail] = useState(dummyUserInfo.email);
  //   const [password, setPassword] = useState("");
  //   const [checkPassword, setCheckPassword] = useState("");
  const [alertText0, setAlertText0] = useState(alertText);
  const [alertText1, setAlertText1] = useState("");
  // const [alertText2, setAlertText2] = useState("");
  const [alertText3, setAlertText3] = useState("");
  const [alertText4, setAlertText4] = useState("");
  const [alertText5, setAlertText5] = useState("");
  // let alertText1 =""
  // let alertText2 = "";
  // let alertText3 = "";
  // let alertText4 = "";
  // let alertText5 = "";
  const nameInputLength = name?.length;

 useEffect(() => {
   if (alertText === "Error: Account 已重複註冊!") {
     setAlertText1("account 已重複註冊！");
   } else {
     setAlertText1("");
   }

   if (alertText === "Error: Email 已重複註冊!") {
     setAlertText3("email 已重複註冊！");
   } else {
     setAlertText3("");
   }

   if (alertText === "尚未輸入密碼！") {
     setAlertText4("尚未輸入密碼！");
   } else {
     setAlertText4("");
   }
   
   if (alertText === "尚未輸入確認密碼！") {
     setAlertText5("尚未輸入確認密碼！");
   } else {
     setAlertText5("");
   }

   if (alertText === "Error: 密碼與確認密碼不相符!") {
     setAlertText5("密碼與確認密碼不相符！");
   } else {
     setAlertText5("");
   }
 }, [alertText])

  //   if (alertText === "Email 已重複註冊!") {
  //     setAlertText3("email 已重複註冊！");
  //   } else{
  //     setAlertText3("");
  //   }

  //  if (alertText === "密碼與確認密碼不相符!") {
  //    setAlertText5("密碼與確認密碼不相符！");
  //  } else {
  //    setAlertText5("");
  //  }

  // "Account 已重複註冊!";
  // "Email 已重複註冊!"
  // "密碼與確認密碼不相符!";

  // "非該用戶不可編輯該用戶基本資料!";
  // "該用戶不存在!";
  // "Name 超過字數限制50字元!";
  

  return (
    <div className="settingContainer">
      <div className="settingHeader">帳戶設定</div>
      <div className="settingForm">
        <ConfigInput
          label="帳號"
          placeholder="請輸入帳號"
          // alertText="account 已重複註冊！"
          alertText={alertText1}
          value={account}
          onChange={(accountInputValue) => setAccount(accountInputValue)}
        />
        <ConfigInput
          label="名稱"
          placeholder="請輸入使用者名稱"
          alertText={nameInputLength > 50 ? "字數超出上限！" : ""}
          wordCount={`${nameInputLength}/50`}
          value={name}
          onChange={(nameInputValue) => setUsername(nameInputValue)}
        />
        <ConfigInput
          label="Email"
          placeholder="請輸入 Email"
          alertText={alertText3}
          value={email}
          onChange={(emailInputValue) => setEmail(emailInputValue)}
        />

        <ConfigInput
          type="password"
          label="密碼"
          placeholder="請設定密碼"
          alertText={alertText4}
          value={password}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
        <ConfigInput
          type="password"
          label="密碼確認"
          placeholder="請再次輸入密碼"
          alertText={alertText5}
          value={checkPassword}
          onChange={(checkPasswordInputValue) =>
            setCheckPassword(checkPasswordInputValue)
          }
        />
      </div>
      <div className="saveBtn">
        <button onClick={onClick}>儲存</button>
      </div>
    </div>
  );
};

export default Setting;
