import { Link } from "react-router-dom";
import {
  homepageList2,
  innerPageList2,
  layoutList,
  technologyList,
} from "../../data";
import WelcomeCard from "../cards/WelcomeCard";
import { toggleLayout } from "../../redux/features/layoutSlice";
import { useAppDispatch } from "../../redux/hooks";

const LandingMain = () => {
  const dispatch = useAppDispatch();

  const changeLayout = (layout: string) => {
    dispatch(toggleLayout(layout));
  };

  return (
    <div className="main-content-wrap">
      <div className="main-container">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-12">
              <WelcomeCard />
            </div>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-12 col-sm-10 col-md-9 col-lg-8">
              <div className="section-heading text-center">
                <div className="badge bg-primary d-inline-block mb-3">
                  Dashboard Layouts
                </div>
                <h2>
                  6 Unique dashbaord layout designed for your admin panel.
                </h2>
                <p>
                  Empower your control center with intuitive design and advanced
                  functionality
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {layoutList.map((item) => (
              <div className="col-12 col-md-6 col-xl-4" key={item.id}>
                <div className="single-preview text-center landing-layout-card">
                  <Link
                    to={item.url}
                    role="button"
                    onClick={() => changeLayout(`style-${item.id}`)}
                  >
                    <img className="w-100" src={item.img} alt="image" />
                  </Link>
                  <h5 className="mb-0 mt-2">{item.name}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="features-margin"></div>
          <div className="row justify-content-center g-4">
            <div className="col-12 col-sm-10 col-md-9 col-lg-8">
              <div className="section-heading text-center">
                <div className="badge bg-primary d-inline-block mb-3">
                  Home Page
                </div>
                <h2>
                  13 Pre-built dashbaord pages tailored for your admin
                  perfection.
                </h2>
                <p>
                  Empower your control center with intuitive design and advanced
                  functionality
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {homepageList2.map((item) => (
              <div className="col-12 col-md-6 col-xl-4" key={item.id}>
                <div className="single-preview text-center landing-home-card">
                  <Link to={item.url} target="_blank">
                    <img className="w-100" src={item.img} alt="image" />
                  </Link>
                  <h5 className="mb-0 mt-2">{item.name}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="features-margin"></div>
          <div className="row justify-content-center g-4">
            <div className="col-12 col-sm-10 col-md-9 col-lg-8">
              <div className="section-heading text-center">
                <div className="badge bg-primary d-inline-block mb-3">
                  Inner Pages
                </div>
                <h2>
                  62+ Pre-built dashbaord inner pages tailored for your admin
                  perfection.
                </h2>
                <p>
                  Empower your control center with intuitive design and advanced
                  functionality
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {innerPageList2.map((item) => (
              <div className="col-12 col-md-6 col-xl-4" key={item.id}>
                <div className="single-preview text-center">
                  <Link to={item.url} target="_blank">
                    <img className="w-100" src={item.img} alt="image" />
                  </Link>
                  <h5 className="mb-0 mt-2">{item.name}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="features-margin"></div>

          <div className="cta-text rounded p-4 p-sm-5 bg-primary">
            <div className="row align-items-center text-md-start text-center">
              <div className="col-12 col-md-8 col-lg-9">
                <h2 className="mb-3 mb-md-0 text-white">
                  Transform your admin experience today, explore our template
                  now!
                </h2>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="text-md-end">
                  <a className="btn btn-lg btn-warning rounded-pill" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="features-margin"></div>

          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-9 col-lg-7">
              <div className="section-heading text-center">
                <h2 className="mb-0">
                  <span className="me-1">Built </span>with all modern
                  technologies & features.
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {technologyList.map((technology, index) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={index}>
                <div className="single-more-feature">
                  <i className="ti ti-checkbox"></i>
                  <h6 className="mb-0 d-inline-block">{technology}</h6>
                </div>
              </div>
            ))}

            <div className="features-margin"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingMain;
