import LandingFooter from "../components/footer/LandingFooter";
import HeaderSection from "../components/header/HeaderSection";
import LandingMain from "../components/main/LandingMain";

const LandingPage = () => {
  return (
    <main className="demo-page landing-page">
      <div className="webdesh-page-wrapper">
        <div className="webdesh-page-content">
          <HeaderSection headerStyle="landing-header" />
          <LandingMain />
        </div>
        <LandingFooter />
      </div>
    </main>
  );
};
export default LandingPage;
