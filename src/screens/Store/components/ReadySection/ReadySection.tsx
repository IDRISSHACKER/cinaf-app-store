import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { StoreContainer } from "../../../../components/container/container";

function ReadySection(){

      const { scrollYProgress } = useViewportScroll();
      const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);
      const constraintsRef = React.useRef(null);

    return (
      <React.Fragment>
        <div className="readySection">
          <StoreContainer>
            <motion.div
              className="readySection-content"
              ref={constraintsRef}
            >
              <h2 className="readySection-content-title h2">
                Regardez la tv <strong className="primary">partout</strong>{" "}
              </h2>
              <p className="readySection-content-body p2">
                Accedez à cinaf depuis n'importequelle emplacement: depuis votre
                canappé, en deplacement, au bureau.
              </p>
            </motion.div>
          </StoreContainer>
        </div>
      </React.Fragment>
    );
}


export default ReadySection;
