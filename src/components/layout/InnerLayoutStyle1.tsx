import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import HeaderSection2 from "../header/HeaderSection2";
import LeftSidebarSection from "../sidebar/LeftSidebarSection";
import FooterSection from "../footer/FooterSection";
import { useEffect, useRef, useState } from "react";

const InnerLayoutStyle1 = () => {
  const darkMode = useAppSelector((state) => state.theme.isDark);
  const mainBackgroundImg = useAppSelector((state) => state.mainBg.mainBg);
  // sidebar
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const toggleSidebarOpen = () => {
    setSidebarOpen(true);
  };
  const toggleSidebarClose = () => {
    setSidebarOpen(false);
  };
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div
      className={`home-call-center ${darkMode ? "dark-theme" : "light-theme"} ${
        mainBackgroundImg !== "" ? "bg-detected" : ""
      } ${sidebarOpen ? "mobile-menu-open" : ""}`}
      style={{
        ...(mainBackgroundImg !== "" && {
          backgroundImage: `url(${mainBackgroundImg})`,
        }),
      }}
    >
      <div className="webdesh-page-wrapper">
        <LeftSidebarSection
          toggleClose={toggleSidebarClose}
          sidebarRef={sidebarRef}
        />
        <div className="webdesh-page-content">
          <HeaderSection2 toggleSidebarOpen={toggleSidebarOpen} />
          <div className="main-content-wrap">
            <div className="main-container">
              <div className="overflow-hidden">
                <div className="container-fluid">
                  <Outlet />
                </div>
              </div>
            </div>
            <div className="mt-4"></div>
            <FooterSection footerStyle="mt-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InnerLayoutStyle1;
