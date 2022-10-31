import React from "react"
import PresentationSection from "../PresentationSection/PresentationSection"
import { StoreContainer } from './../../../../components/container/container';

function OfferSession(){

    return (
      <div className="offers">
        <StoreContainer>
          <PresentationSection />
        </StoreContainer>
      </div>
    );
}

export default OfferSession;

