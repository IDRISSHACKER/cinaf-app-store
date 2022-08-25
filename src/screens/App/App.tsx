import * as React from "react"
import { StoreContainer } from "../../components/container/container"
import Page from "../../components/Page"
import AppHead from "./components/AppHead"
import "./AppPage.scss"

function AppPage(){

    return <Page title="Telechargement de l'application">
        <div className="appPage">
                <div className="appPage-body">
                    <StoreContainer>
                        <AppHead />
                    </StoreContainer>
                </div>
        </div>
    </Page>

}


export default AppPage
