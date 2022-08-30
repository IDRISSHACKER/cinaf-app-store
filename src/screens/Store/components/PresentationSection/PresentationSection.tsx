// @ts-nocheck
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { Card, CardContent } from "@mui/material"
import { StoreContainer } from "../../../../components/container/container";
import firstIllus from "./1.svg";
import secondIllus from "./2.svg";
import thirthIllus from "./3.svg";
import "./PresentationSection.scss";
import CinafBtn from "../../../../components/cinafBtn/CinafBtn";


function PresentationSection() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);
  const constraintsRef = React.useRef(null);

  const elem1 = React.useRef();
  const elem2 = React.useRef();
  const elem3 = React.useRef();

  const handleHover = (e)=>{
    //elem1.current.classList.remove("active");
    //elem2.current.classList.remove("active");
    //elem3.current.classList.remove("active");

    //e.current.target.classList.add("active")
    e?.currentTarget?.parentNode?.classList?.add("active");

  }

  return (
    <React.Fragment>
      <div>
        <div>
          <div className="presentationSection">
            <StoreContainer>
              <div className="presentationSection-content" ref={constraintsRef}>
                <div
                  className="presentation-item active"
                  ref={elem1}
                  onMouseOver={handleHover}
                >
                  <div className="presentation-ic">
                    <div className="item-title">Au bureau</div>
                    <img src={firstIllus} />
                  </div>
                </div>

                <div
                  className="presentation-item active"
                  ref={elem2}
                  onMouseOver={handleHover}
                >
                  <div className="presentation-ic">
                    <div className="item-title">Sur un cannapé</div>
                    <img src={secondIllus} />
                  </div>
                </div>

                <div
                  className="presentation-item active"
                  ref={elem3}
                  onMouseOver={handleHover}
                >
                  <div className="presentation-ic">
                    <div className="item-title fixer">En deplacement</div>
                    <img src={thirthIllus} />
                  </div>
                </div>
              </div>
            </StoreContainer>
          </div>
        </div>
        <div>
          <div className="presentation-link">
            <StoreContainer>
              <div className="presentation-link-content">
                <CinafBtn
                  hto={"https://cinaf.tv/fr/"}
                  ext={true}
                  variant={"c-white-id"}
                >
                  Creer mon compte cinaf
                </CinafBtn>
              </div>
            </StoreContainer>
          </div>
        </div>
        <div>
          <div className="session-title">
            <StoreContainer>
              <h2 className="h2 white">
                Choisissez l'abonnement qu'il vous faut
              </h2>
            </StoreContainer>
          </div>
        </div>
        <div>
          <StoreContainer>
            <Card className="sessionDetail">
              <CardContent className="sessionDetail-content">
                <div className="c-header">
                  <h3 className="h2">
                    <strong className="primary">Cinaf</strong>
                  </h3>
                  <div className="paycount">
                    <h3 className="h2">
                      <strong className="primary">1500 XAF</strong>
                    </h3>
                    <p>
                      <strong>Mensuel</strong>
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="c-body">
                    <Item>
                      <p className="p">Synchonisation avec la TV</p>
                    </Item>
                    <Item>
                      <p className="p">Fonctionne sur tous vos appareils</p>
                    </Item>
                    <Item>
                      <p className="p">Prêts à l'emploi</p>
                    </Item>
                  </div>
                  <div className="offer">
                    <p className="p">
                      Cinaf est une application de streaming. souscrivez à un
                      abonnement à ayez access à tout les contenus camerounais
                      de n'importe où.
                    </p>
                    <div className="offer-bottom flex">
                      <CinafBtn variant={"dl"} downloadBtn>
                        Telecharger
                      </CinafBtn>
                      <CinafBtn
                        hto={"https://cinaf.tv/fr/subscription/subscribe.html"}
                        ext={true}
                      >
                        S'abonner
                      </CinafBtn>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </StoreContainer>
        </div>
      </div>
    </React.Fragment>
  );
}


function Item({children}:any){

    return (
      <React.Fragment>
        <div className="item">
          <div className="item-icon">
            <CheckOutlinedIcon />
          </div>
          <div className="item-text">{children}</div>
        </div>
      </React.Fragment>
    );
}

export default PresentationSection;
