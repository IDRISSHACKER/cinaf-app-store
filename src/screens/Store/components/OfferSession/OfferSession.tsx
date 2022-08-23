import React from "react"
import PresentationSection from "../PresentationSection/PresentationSection"
import "./Offers.scss"
import { StoreContainer } from './../../../../components/container/container';

function OfferSession(){

    return (
      <div className="offers">
        <StoreContainer>
          <div className="oc">
            <div className="offers-body">
              <PresentationSection />
            </div>
          </div>
        </StoreContainer>
      </div>
    );
}

export default OfferSession;

