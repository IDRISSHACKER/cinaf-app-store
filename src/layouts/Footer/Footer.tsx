import React from "react"
import { StoreContainer } from "../../components/container/container";
import { Link } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(){

    return (
      <div className="footerr">
          <div className="footerr-content">
            <StoreContainer>
              <div className="socials">
                  <Link className="social" href="https://www.facebook.com/cinaftv">
                    <FacebookIcon />
                  </Link>
                  <Link className="social" href="https://twitter.com/CinafTv">
                    <TwitterIcon />
                  </Link>
                  <Link className="social" href="https://www.instagram.com/cinaf.tv">
                    <InstagramIcon />
                  </Link>
              </div>
            </StoreContainer>
            <div className="vector">
              <StoreContainer>
                <img src="https://cinaf.tv/favicon.ico" />
              </StoreContainer>
            </div>
          </div>
      </div>
    );
}

export default Footer;
