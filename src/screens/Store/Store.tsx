// @ts-nocheck
import Slider from "./components/slider/Slid.tsx";
import WebSection from "./components/WebSection/WebSection";
import DeskSection from "./components/DeskSection/DeskSection";
import ReadySection from "./components/ReadySection/ReadySection";
import OfferSession from "./components/OfferSession/OfferSession";
import DownloadedSession from "./components/DownloadSection/DownloadSection";

import "./Store.scss";

const Store = () => {

  return (
    <div>
      <div className="welcome">
        <Slider />
        <WebSection />
        <DeskSection />
        <ReadySection />
        <OfferSession />
        <DownloadedSession />
      </div>
    </div>
  );
};

export default Store;
