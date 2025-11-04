import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  children: ReactNode;
  url?: string;
  tooltipTitle: string;
};
const MusicNavlink = ({ children, url, tooltipTitle }: Props) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <li className={pathname === url ? "active" : ""}>
      <Link
        to={url ? url : "#"}
        data-tooltip-id="music-tooltip"
        data-tooltip-content={tooltipTitle}
        data-tooltip-place="right"
      >
        {children}
      </Link>
    </li>
  );
};
export default MusicNavlink;
