import React from "react"
import { StoreContainer } from "../../components/container/container";
import "./Footer.scss"

function Footer(){

    return (
      <div className="footer">
        <StoreContainer>
          <div className="footer-content">
            <div>
              <img className="favicon" src="https://vod.cinaf.tv/favicon.ico" alt="cinaficon" />
            </div>
            <div className="section">
              <div className="section-head">
                <h4 className="h4">Telechargement</h4>
              </div>
              <div className="section-body">
                <div className="section-item">
                  <a href="/download/cinaf-for-android">Android</a>
                </div>
                <div className="section-item">
                  <a href="/download/cinaf-for-ios">IOS</a>
                </div>{" "}
                <div className="section-item">
                  <a href="/download/cinaf-for-tv">Smart TV</a>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section-head">
                <h4 className="h4">Social</h4>
              </div>
              <div className="section-body">
                <div className="section-item">
                  <a href="https://www.facebook.com/cinaftv">Facebook</a>
                </div>
                <div className="section-item">
                  <a href="https://twitter.com/CinafTv">Twitter</a>
                </div>{" "}
                <div className="section-item">
                  <a href="https://www.instagram.com/cinaf.tv/">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </StoreContainer>
      </div>
    );
}

export default Footer;
