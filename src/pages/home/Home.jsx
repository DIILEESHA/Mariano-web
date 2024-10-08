import { lazy } from "react";
import Footer from "../../components/bottom/Footer";
import Us from "../../components/us/Us";

const Header = lazy(() => import("../../components/header/Header"));
const Calendar = lazy(() => import("../../components/calendar/Calendar"));
const Address = lazy(() => import("../../components/address/Address"));
const Kodi = lazy(() => import("../../components/kodi/Kodi"));
const Time = lazy(() => import("../../components/counter/Timeallocation"));
const Bottom = lazy(() => import("../../components/bottom/Bottomsection"));

const Home = () => {
  return (
    <div>
      <Header />
      <Calendar />
      <Address />
      <Kodi />
      <Time />
      {/* <ThreeImage /> */}
      <Us />
      <Bottom />
      <Footer />
    </div>
  );
};

export default Home;
