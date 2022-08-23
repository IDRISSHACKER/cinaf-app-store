import React from "react"
import { StoreContainer } from "../../components/container/container";
import "./Footer.scss"

function Footer(){

    return (
      <div className="footer">
        <StoreContainer>
          <div className="footer-content">
            <div>
              <img src="favicon.ico" alt="cinaficon" />
            </div>
            <div className="section">
              <div className="section-head">
                <h4 className="h4">Telechargement</h4>
              </div>
              <div className="section-body">
                <div className="section-item">
                  <a href="">Android</a>
                </div>
                <div className="section-item">
                  <a href="">IOS</a>
                </div>{" "}
                <div className="section-item">
                  <a href="">Windows</a>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section-head">
                <h4 className="h4">Social</h4>
              </div>
              <div className="section-body">
                <div className="section-item">
                  <a href="">Facebook</a>
                </div>
                <div className="section-item">
                  <a href="">Twitter</a>
                </div>{" "}
                <div className="section-item">
                  <a href="">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </StoreContainer>
      </div>
    );
}

export default Footer;
