import * as React from "react"
import { StoreContainer } from "../../components/container/container"
import Page from "../../components/Page"
import "./AppPage.scss"

function AppPage(){

    return <Page title="Telechargement de l'application">
        <div className="appPage">
            <StoreContainer>
                <div className="appPage-body">
                    <h1>App Page is running now</h1>
                </div>
            </StoreContainer>
        </div>
    </Page>

}


export default AppPage
