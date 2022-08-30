import React from 'react'
import "./home.css"
import Flexer from './../../components/Flexer';
import Uploader from './components/Uploader';
import mediaUpload from "./components/mediaUpload.svg"
import Modes from './components/Mode/Modes';
import Container from './../../components/container/container';
import Page from "../../components/Page";

function Home(){
    return (
      <Page title={"Ajouter une application | Cinaf"}>
        <Container>
          <div className="Home">
            <Flexer col={true}>
              <Modes />
              <br /><br />
              <Uploader />
              <div>
                {/**<img
                  src={mediaUpload}
                  alt="upload to gihon"
                  style={{ width: "500px" }}
                />**/}
              </div>
            </Flexer>
          </div>
        </Container>
      </Page>
    );
}

export default Home
