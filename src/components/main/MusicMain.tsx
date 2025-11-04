import { useAppSelector } from "../../redux/hooks";
import MusicPlaylistCard from "../cards/MusicPlaylistCard";
import MusicWelcomeCard from "../cards/MusicWelcomeCard";
import NewReleaseMusicCard from "../cards/NewReleaseMusicCard";
import TopCategoryCard from "../cards/TopCategoryCard";
import TopStreamCard from "../cards/TopStreamCard";

const MusicMain = () => {
  const activeLayout = useAppSelector((state) => state.layout.isLayout);

  return (
    <div className="row g-4">
      <div
        className={`col-12 ${
          activeLayout === "style-1" ||
          activeLayout === "style-3" ||
          activeLayout === "style-4"
            ? "col-xxl-8 col-xl-7"
            : "col-xl-8"
        }`}
      >
        <MusicWelcomeCard />

        <NewReleaseMusicCard />

        <MusicPlaylistCard />
      </div>

      <div
        className={`col-12 ${
          activeLayout === "style-1" ||
          activeLayout === "style-3" ||
          activeLayout === "style-4"
            ? "col-xxl-4 col-xl-5"
            : "col-xl-4"
        }`}
      >
        <TopStreamCard />

        <TopCategoryCard />
      </div>
    </div>
  );
};
export default MusicMain;
