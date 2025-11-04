import NowPlayingCard from "../cards/NowPlayingCard";
import PlaylistCard from "../cards/PlaylistCard";
import PlaylistCard2 from "../cards/PlaylistCard2";
import PodcastBannerCard from "../cards/PodcastBannerCard";
import PopularCategoryCard from "../cards/PopularCategoryCard";
import TopEpisodeCard from "../cards/TopEpisodeCard";
import PlaylistTable from "../table/PlaylistTable";

const PodcastMain = () => {
  return (
    <div className="row g-4">
      <div className="col-12 col-xl-8">
        <PodcastBannerCard />

        <PopularCategoryCard />

        <div className="podcast-playlist mt-4">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <PlaylistCard />
            </div>

            <div className="col-12 col-lg-6">
              <PlaylistCard2 />
            </div>

            <div className="col-12">
              <PlaylistTable />
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-xl-4">
        <NowPlayingCard />

        <TopEpisodeCard />
      </div>
    </div>
  );
};
export default PodcastMain;
