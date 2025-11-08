import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import CallCenterPage from "./pages/CallCenterPage";
// import CrmPage from "./pages/CrmPage";
// import HrManagementPage from "./pages/HrManagementPage";
// import HrmPage from "./pages/HrmPage";
// import OtaPage from "./pages/OtaPage";
import HomePageLayout from "./components/layout/HomePageLayout";
import AudiencePage from "./pages/AudiencePage";
import InnerLayoutStyle2 from "./components/layout/InnerLayoutStyle2";
import { useAppSelector } from "./redux/hooks";
import InnerLayoutStyle1 from "./components/layout/InnerLayoutStyle1";
import InnerLayoutStyle3 from "./components/layout/InnerLayoutStyle3";
import InnerLayoutStyle4 from "./components/layout/InnerLayoutStyle4";
import InnerLayoutStyle5 from "./components/layout/InnerLayoutStyle5";
import CompanyPage from "./pages/CompanyPage";
import TaskPage from "./pages/TaskPage";
import LeadsPage from "./pages/LeadsPage";
import CustomerPage from "./pages/CustomerPage";
import AddEmployeePage from "./pages/AddEmployeePage";
import AllEmployeePage from "./pages/AllEmployeePage";
import AttendancePage from "./pages/AttendancePage";
import AllCustomerPage from "./pages/AllCustomerPage";
import AddNewProductPage from "./pages/AddNewProductPage";
import AllProductPage from "./pages/AllProductPage";
import CategoryPage from "./pages/CategoryPage";
import OrderListPage from "./pages/OrderListPage";
import CalenderPage from "./pages/CalenderPage";
import ChatPage from "./pages/ChatPage";
import EmailPage from "./pages/EmailPage";
import CardDeclinedPage from "./pages/CardDeclinedPage";
import PromotionPage from "./pages/PromotionPage";
import SubscriptionConfirm from "./pages/SubscriptionConfirm";
import WelcomeMailPage from "./pages/WelcomeMailPage";
import ResetPasswordMailPage from "./pages/ResetPasswordMailPage";
import InvoicePage from "./pages/InvoicePage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import LoginPage2 from "./pages/LoginPage2";
import LoginPage3 from "./pages/LoginPage3";
import LoginStatusPage from "./pages/LoginStatusPage";
import RegistrationPage from "./pages/RegistrationPage";
import RegistrationPage2 from "./pages/RegistrationPage2";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import AccountDeactivatedPage from "./pages/AccountDeactivatedPage";
import WelcomePage from "./pages/WelcomePage";
import EmailVerifyPage from "./pages/EmailVerifyPage";
import TwoFactorPage from "./pages/TwoFactorPage";
import MultiStepAuthPage from "./pages/MultiStepAuthPage";
import ErrorLayout from "./components/layout/ErrorLayout";
import Error400Page from "./pages/Error400Page";
import Error403Page from "./pages/Error403Page";
import Error404Page from "./pages/Error404Page";
import Error408Page from "./pages/Error408Page";
import Error500Page from "./pages/Error500Page";
import Error503Page from "./pages/Error503Page";
import Error504Page from "./pages/Error504Page";
import ViewProfilePage from "./pages/ViewProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import ComingSoonPage from "./pages/ComingSoonPage";
import ComingSoonPage2 from "./pages/ComingSoonPage2";
import PricingTablePage from "./pages/PricingTablePage";
import PricingTablePage2 from "./pages/PricingTablePage2";
import UnderConstructionPage from "./pages/UnderConstructionPage";
import UtilityPage from "./pages/UtilityPage";
import SweetAlertPage from "./pages/SweetAlertPage";
import NestableListPage from "./pages/NestableListPage";
import AnimationPage from "./pages/AnimationPage";
import SwiperSliderPage from "./pages/SwiperSliderPage";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import ChartPage from "./pages/ChartPage";
import IconPage from "./pages/IconPage";
import MapPage from "./pages/MapPage";
import FileManagerPage from "./pages/FileManagerPage";
// import PodcastPage from "./pages/PodcastPage";
// import MusicPage from "./pages/MusicPage";
// import CourierPage from "./pages/CourierPage";
// import DeliveryPage from "./pages/DeliveryPage";
// import LogisticsPage from "./pages/LogisticsPage";
// import RestaurantPage from "./pages/RestaurantPage";
// import PosPage from "./pages/PosPage";
import SaasPage from "./pages/SaasPage";
import InnerLayoutStyle6 from "./components/layout/InnerLayoutStyle6";
import UpdateProductPage from "./pages/UpdateProductPage";
import CommissionCollectorrPage from "./pages/CommissionCollectorrPage";
import CommissionSellerPage from "./pages/CommissionSellerPage";
import ReportClientsPage from "./pages/ReportClientsPage";
import RepostProductsPage from "./pages/ReportCharginsPage";
import ReportCharginsPage from "./pages/ReportCharginsPage";
import AddCitiesByCollectorPage from "./pages/AddCitiesByCollectorPage";
import ListCollectorSalesPage from "./pages/ListCollectorSalesPage";

function App() {
  const activeLayout = useAppSelector((state) => state.layout.isLayout);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route element={<HomePageLayout />}>
          <Route
            element={
              activeLayout === "style-1" ? (
                <InnerLayoutStyle1 />
              ) : activeLayout === "style-2" ? (
                <InnerLayoutStyle2 />
              ) : activeLayout === "style-3" ? (
                <InnerLayoutStyle3 />
              ) : activeLayout === "style-4" ? (
                <InnerLayoutStyle4 />
              ) : activeLayout === "style-5" ? (
                <InnerLayoutStyle5 />
              ) : activeLayout === "style-6" ? (
                <InnerLayoutStyle6 />
              ) : (
                <></>
              )
            }
          >
            {/* <Route path="/call-center" element={<CallCenterPage />} />
            <Route path="/crm" element={<CrmPage />} />
            <Route path="/hr-management" element={<HrManagementPage />} />
            <Route path="/hrm" element={<HrmPage />} />
            <Route path="/ota" element={<OtaPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/courier" element={<CourierPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/logistics" element={<LogisticsPage />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/pos" element={<PosPage />} /> */}
            <Route path="/inicio" element={<SaasPage />} />

            <Route path="/audience" element={<AudiencePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/task" element={<TaskPage />} />
            <Route path="/leads" element={<LeadsPage />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/add-employee" element={<AddEmployeePage />} />
            <Route path="/all-employee" element={<AllEmployeePage />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/all-customer" element={<AllCustomerPage />} />
            <Route path="/add-product" element={<AddNewProductPage />} />
            <Route path="/update-product/:id" element={<UpdateProductPage />} />
            <Route path="/commision-collector" element={<CommissionCollectorrPage />} />
            <Route path="/commission-seller" element={<CommissionSellerPage />} />
            <Route path="/all-product" element={<AllProductPage />} />
            <Route path="/report-clients" element={<ReportClientsPage />} />
            <Route path="/report-chargings" element={<ReportCharginsPage />} />
            <Route path="/collector-cities" element={<AddCitiesByCollectorPage />} />
            <Route path="/collector-sales" element={<ListCollectorSalesPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/order" element={<OrderListPage />} />
            <Route path="/calendar" element={<CalenderPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/email" element={<EmailPage />} />
            <Route path="/invoices" element={<InvoicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/view-profile" element={<ViewProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/utility" element={<UtilityPage />} />
            <Route path="/sweet-alert" element={<SweetAlertPage />} />
            <Route path="/nestable-list" element={<NestableListPage />} />
            <Route path="/animation" element={<AnimationPage />} />
            <Route path="/swiper-slider" element={<SwiperSliderPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/charts" element={<ChartPage />} />
            <Route path="/icon" element={<IconPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/file-manager" element={<FileManagerPage />} />
          </Route>
        </Route>
        <Route path="/card-declined" element={<CardDeclinedPage />} />
        <Route path="/promotion" element={<PromotionPage />} />
        <Route path="/subscription-confirm" element={<SubscriptionConfirm />} />
        <Route path="/welcome-mail" element={<WelcomeMailPage />} />
        <Route
          path="/reset-password-mail"
          element={<ResetPasswordMailPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-2" element={<LoginPage2 />} />
        <Route path="/login-3" element={<LoginPage3 />} />
        <Route path="/login-status" element={<LoginStatusPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/registration-2" element={<RegistrationPage2 />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/update-password" element={<UpdatePasswordPage />} />
        <Route
          path="/account-deactivated"
          element={<AccountDeactivatedPage />}
        />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/email-verify" element={<EmailVerifyPage />} />
        <Route path="/two-factor" element={<TwoFactorPage />} />
        <Route path="/multi-step-signup" element={<MultiStepAuthPage />} />
        <Route element={<ErrorLayout />}>
          <Route path="/error-400" element={<Error400Page />} />
          <Route path="/error-403" element={<Error403Page />} />
          <Route path="/error-404" element={<Error404Page />} />
          <Route path="/error-408" element={<Error408Page />} />
          <Route path="/error-500" element={<Error500Page />} />
          <Route path="/error-503" element={<Error503Page />} />
          <Route path="/error-504" element={<Error504Page />} />
        </Route>
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/coming-soon-2" element={<ComingSoonPage2 />} />
        <Route path="/pricing-table" element={<PricingTablePage />} />
        <Route path="/pricing-table-2" element={<PricingTablePage2 />} />
        <Route path="/under-construction" element={<UnderConstructionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
