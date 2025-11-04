import { useAppSelector } from "../../redux/hooks";

const EmailTemplateLogoContainer = () => {
  const darkMode = useAppSelector((state) => state.theme.isDark);
  return (
    <div className="mail-header">
      <div className="logo">
        <a href="#">
          {darkMode ? (
            <img src="/img/core-img/logo.png" alt="logo" />
          ) : (
            <img src="/img/core-img/logo-white.png" alt="logo" />
          )}
        </a>
      </div>
    </div>
  );
};
export default EmailTemplateLogoContainer;
