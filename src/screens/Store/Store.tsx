// @ts-nocheck
import Slider from "./components/slider/Slid.tsx";
import WebSection from "./components/WebSection/WebSection";
import DeskSection from "./components/DeskSection/DeskSection";
import ReadySection from "./components/ReadySection/ReadySection";
import OfferSession from "./components/OfferSession/OfferSession";
import DownloadedSession from "./components/DownloadSection/DownloadSection";
import PresentationSection from "./components/PresentationSection/PresentationSection";
import Page from "../../components/Page";

import "./Store.scss";

const Store = () => {

  return (
    <Page title="Cinaf roi du streaming camrounais">
      <div className="">
        <Slider />
        <WebSection />
        <DeskSection />
        <ReadySection />
        <PresentationSection />
        <OfferSession />
        <DownloadedSession />
      </div>
    </Page> 
  ); 
};

export default Store;
