import React, { useState } from "react";
import "./setting.scss";

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
    value.length > 0 ? "showWordCount" : "hideWordCount";

  return (
    <>
      <div className="authInputContainer">
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
export {ConfigInput}

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

  const nameInputLength = name.length;

  return (
    <div className="settingContainer">
      <div className="settingHeader">帳戶設定</div>
      <div className="settingForm">
        <ConfigInput
          label="帳號"
          placeholder="請輸入帳號"
          // alertText="account 已重複註冊！"
          alertText={alertText}
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
          alertText="email 已重複註冊！"
          value={email}
          onChange={(emailInputValue) => setEmail(emailInputValue)}
        />

        <ConfigInput
          type="password"
          label="密碼"
          placeholder="請設定密碼"
          value={password}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
        <ConfigInput
          type="password"
          label="密碼確認"
          placeholder="請再次輸入密碼"
          alertText={alertText}
          value={checkPassword}
          onChange={(checkPasswordInputValue) =>
            setCheckPassword(checkPasswordInputValue)
          }
        />

      </div>
      <div className="saveBtn">
        <button onClick={onClick} type="submit">
          儲存
        </button>
      </div>
    </div>
  );
};

export default Setting;
