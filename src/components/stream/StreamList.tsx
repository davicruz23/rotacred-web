import { streamData } from "../../data";
import { useEffect, useRef, useState } from "react";

const StreamList = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (activeDropdown !== null && dropdownRefs?.current[activeDropdown]) {
        if (
          !dropdownRefs?.current[activeDropdown]?.contains(event.target as Node)
        ) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activeDropdown]);

  const toggleDropdown = (dropdown: number) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownButtonClick = (dropdown: number) => {
    toggleDropdown(dropdown);
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };
  return (
    <ul className="stream-list">
      {streamData.map((item) => (
        <li
          className="d-flex align-items-center justify-content-between stream-list-item"
          key={item.id}
        >
          <div className="d-flex align-items-center ">
            <span className="sl-number">{item.id}</span>
            <img src={item.img} alt="music" />
            <div className="stream-title">
              <h6 className="mb-0">{item.title}</h6>
              <p className="mb-0">{item.subTitle}</p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="total-stream-time">{item.duration}</div>
            <a href="#" className="love-stream">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.8478 20.2724C11.2326 19.7268 10.5373 19.1594 9.80193 18.5556H9.79239C7.20291 16.4383 4.26817 14.0424 2.972 11.1716C2.54615 10.2576 2.32048 9.26319 2.31007 8.25493C2.30723 6.87148 2.86209 5.54527 3.84928 4.57603C4.83646 3.60679 6.17263 3.07635 7.5558 3.10459C8.68185 3.10637 9.78365 3.43181 10.7299 4.04214C11.1458 4.31203 11.522 4.63849 11.8478 5.01212C12.1754 4.63996 12.5517 4.31369 12.9665 4.04214C13.9124 3.43169 15.0139 3.10623 16.1397 3.10459C17.5229 3.07635 18.8591 3.60679 19.8462 4.57603C20.8334 5.54527 21.3883 6.87148 21.3854 8.25493C21.3757 9.2648 21.15 10.2609 20.7235 11.1763C19.4273 14.0472 16.4936 16.4421 13.9041 18.5556L13.8945 18.5633C13.1582 19.1632 12.4639 19.7307 11.8487 20.28L11.8478 20.2724ZM7.5558 5.01212C6.66738 5.00101 5.81048 5.34102 5.17138 5.95826C4.55562 6.56311 4.21147 7.39182 4.21753 8.25493C4.22842 8.98981 4.39485 9.71406 4.70595 10.3799C5.3178 11.6186 6.14338 12.7396 7.14473 13.6914C8.08991 14.6452 9.17721 15.5684 10.1176 16.3448C10.378 16.5594 10.6431 16.7759 10.9083 16.9924L11.0752 17.1288C11.3299 17.3367 11.5931 17.5523 11.8478 17.764L11.8602 17.7526L11.8659 17.7478H11.8716L11.8802 17.7411H11.885H11.8897L11.9069 17.7268L11.946 17.6953L11.9527 17.6896L11.9632 17.682H11.9689L11.9775 17.6743L12.6108 17.1545L12.7767 17.0182C13.0447 16.7997 13.3099 16.5832 13.5703 16.3686C14.5107 15.5923 15.5989 14.67 16.5441 13.7114C17.5456 12.7601 18.3712 11.6394 18.9829 10.4009C19.2996 9.72927 19.4684 8.99745 19.4779 8.25493C19.4819 7.39448 19.1379 6.56895 18.5241 5.96589C17.8863 5.34587 17.0292 5.00305 16.1397 5.01212C15.0543 5.0029 14.0166 5.45788 13.2879 6.26251L11.8478 7.92207L10.4076 6.26251C9.67895 5.45788 8.64126 5.0029 7.5558 5.01212Z"
                  fill="#7A8580"
                />
              </svg>
            </a>

            <div
              className="dropdown"
              ref={(ref) => (dropdownRefs.current[item.id] = ref)}
            >
              <button
                className={`btn p-0 border-0 dashboard-btn ${
                  activeDropdown === item.id ? "show" : ""
                }`}
                onClick={() => handleDropdownButtonClick(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.7212 13.5953C16.6677 13.5953 15.8136 12.7413 15.8136 11.6878C15.8136 10.6343 16.6677 9.78027 17.7212 9.78027C18.7747 9.78027 19.6287 10.6343 19.6287 11.6878C19.6287 12.1937 19.4277 12.6789 19.07 13.0366C18.7123 13.3944 18.2271 13.5953 17.7212 13.5953ZM11.9985 13.5953C10.945 13.5953 10.091 12.7413 10.091 11.6878C10.091 10.6343 10.945 9.78027 11.9985 9.78027C13.0521 9.78027 13.9061 10.6343 13.9061 11.6878C13.9061 12.1937 13.7051 12.6789 13.3474 13.0366C12.9896 13.3944 12.5045 13.5953 11.9985 13.5953ZM6.27594 13.5953C5.22244 13.5953 4.36841 12.7413 4.36841 11.6878C4.36841 10.6343 5.22244 9.78027 6.27594 9.78027C7.32945 9.78027 8.18348 10.6343 8.18348 11.6878C8.18348 12.1937 7.98251 12.6789 7.62477 13.0366C7.26704 13.3944 6.78185 13.5953 6.27594 13.5953Z"
                    fill="#AFB6B3"
                  />
                </svg>
              </button>

              <div
                className={`dropdown-menu dropdown-menu-end ${
                  activeDropdown === item.id ? "show" : ""
                }`}
              >
                <a className="dropdown-item" href="#">
                  Jan 2024
                </a>
                <a className="dropdown-item" href="#">
                  Feb 2024
                </a>
                <a className="dropdown-item" href="#">
                  Mar 2024
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default StreamList;
