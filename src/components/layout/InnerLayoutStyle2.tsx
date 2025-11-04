import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import HeaderSection from "../header/HeaderSection";
import RightSidebarSection2 from "../sidebar/RightSidebarSection2";
import FooterSection from "../footer/FooterSection";

const InnerLayoutStyle2 = () => {
  const darkMode = useAppSelector((state) => state.theme.isDark);
  const mainBackgroundImg = useAppSelector((state) => state.mainBg.mainBg);
  return (
    <div
      className={`home-crm ${darkMode ? "dark-theme" : "light-theme"} ${
        mainBackgroundImg !== "" ? "bg-detected" : ""
      }`}
      style={{
        ...(mainBackgroundImg !== "" && {
          backgroundImage: `url(${mainBackgroundImg})`,
        }),
      }}
    >
      <div className="webdesh-page-wrapper">
        <RightSidebarSection2 />
        <div className="webdesh-page-content">
          <HeaderSection headerStyle="crm-header" />
          <div className="main-content-wrap">
            <div className="main-container">
              <div className="container">
                <Outlet />
              </div>
            </div>

            <div className="mt-4"></div>
            <div className="container mt-auto">
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InnerLayoutStyle2;
