import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { Tooltip } from "react-tooltip";
import { useAppSelector } from "../../redux/hooks";
import { navData } from "../../data"; // Assuming `navData` is imported correctly
import NavSingleSection from "./NavSingleSection";
import MultilvlDropdown from "./MultilvlDropdown";

type MultiLevelState = {
  firstLvl: boolean;
  secondLvl: boolean;
};

type Props = {
  logoutBtn?: boolean;
  dashedDivider?: boolean;
  noTitle?: boolean;
  iconOnly?: boolean;
  noDefaultOpen?: boolean;
};

const SideMenuNavSection = ({
  dashedDivider,
  noTitle,
  iconOnly,
  logoutBtn,
  noDefaultOpen,
}: Props) => {
  const location = useLocation();
  const pathname = location.pathname;

  // Function to find active dropdown title based on current pathname
  const findActiveDropdownTitle = (currentPathname: string): string => {
    for (const category of navData) {
      for (const link of category.links) {
        if (link.hasSub && link.subLinks) {
          for (const subLink of link.subLinks) {
            if (subLink.subUrl === currentPathname) {
              return link.title;
            }
          }
        }
      }
    }
    return "";
  };

  const findDropdown = findActiveDropdownTitle(pathname);
  const [activeDropdown, setActiveDropdown] = useState<string>(
    noDefaultOpen ? "" : findDropdown
  );

  const activeLayout = useAppSelector((state) => state.layout.isLayout);
  const navRef = useRef<HTMLDivElement>(null);

  const [activeMultiLvl, setActiveMultiLvl] = useState<MultiLevelState>({
    firstLvl: false,
    secondLvl: false,
  });

  const toggleDropdown = (dropdown: string) => {
    setActiveMultiLvl((prevState) => ({
      ...prevState,
      firstLvl:
        dropdown === "firstLvl" ? !prevState.firstLvl : prevState.firstLvl,
      secondLvl:
        dropdown === "secondLvl" ? !prevState.secondLvl : prevState.secondLvl,
    }));
    setActiveDropdown(dropdown);
  };

  const handleClick = (level: keyof MultiLevelState) => {
    setActiveMultiLvl((prevState) => ({
      ...prevState,
      [level]: !prevState[level],
    }));
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        activeLayout === "style-5" &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        // Handle logic for closing dropdowns here
        // For example, reset activeMultiLvl state or close active dropdowns
        setActiveMultiLvl({ firstLvl: false, secondLvl: false });
        setActiveDropdown("");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activeLayout, navRef]);

  return (
    <OverlayScrollbarsComponent className="side-menu-area">
      <nav ref={navRef}>
        <ul className="ps-0 sidebar-menu">
          <NavSingleSection
            category="dashboard"
            activeDropdown={activeDropdown}
            pathname={pathname}
            iconOnly={iconOnly}
            toggleDropdown={toggleDropdown}
            noTitle={noTitle}
          />

          <NavSingleSection
            category="gestão"
            activeDropdown={activeDropdown}
            pathname={pathname}
            iconOnly={iconOnly}
            toggleDropdown={toggleDropdown}
            dashedDivider={dashedDivider}
            noTitle={noTitle}
          />

          <NavSingleSection
            category="administração"
            activeDropdown={activeDropdown}
            pathname={pathname}
            iconOnly={iconOnly}
            toggleDropdown={toggleDropdown}
            dashedDivider={dashedDivider}
            noTitle={noTitle}
          />

          {/* <NavSingleSection
            category="components"
            activeDropdown={activeDropdown}
            pathname={pathname}
            iconOnly={iconOnly}
            toggleDropdown={toggleDropdown}
            dashedDivider={dashedDivider}
            noTitle={noTitle}
          /> */}
          {/* {activeLayout !== "style-5" && (
            <MultilvlDropdown
              activeMultiLvl={activeMultiLvl}
              handleClick={handleClick}
              iconOnly={iconOnly}
              dashedDivider={dashedDivider}
              noTitle={noTitle}
            />
          )} */}
        </ul>
      </nav>
      {iconOnly && (
        <Tooltip
          id="ota-tooltip"
          className="ota-tooltip-container"
          style={{ zIndex: 99999 }}
        />
      )}
      {/* {!logoutBtn ? (
        <div className={`call-center-logout ${dashedDivider ? "d-none" : ""}`}>
          <a className="btn btn-primary" href="#">
            Docs & Components
          </a>
        </div>
      ) : (
        <a href="#" className="sidenav-logout">
          <i className="ti ti-logout"></i> Log Out
        </a>
      )} */}
    </OverlayScrollbarsComponent>
  );
};

export default SideMenuNavSection;
