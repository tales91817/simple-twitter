import clsx from "clsx";
const AuthContainer = ({ children }) => {
  return <div className="authContainer">{children}</div>;
};

const AuthInput = ({
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
      {/* <div className="authInputContainer"> */}
      <div
        className={clsx("authInputContainer", {
          authInputContainerError: alertText !== "",
        })}
      >
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

const AuthButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="authButton">
      {children}
    </button>
  );
};

const LinkTextContainer = ({ children }) => {
  return <div className="authLinkTextContainer">{children}</div>;
};

const AuthLinkText = ({ children }) => {
  return <div className="authLinkText">{children}</div>;
};

const AuthTitle = ({ children }) => {
  return <div className="authTitle">{children}</div>;
};

export default AuthInput;
export { AuthButton };
export { AuthLinkText };
export { LinkTextContainer };
export { AuthTitle };
export { AuthContainer };
