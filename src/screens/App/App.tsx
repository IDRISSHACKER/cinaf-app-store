import * as React from "react"
import { StoreContainer } from "../../components/container/container"
import "./AppPage.scss"

function AppPage(){

    return <div>
        <div className="appPage">
            <StoreContainer>
                <div className="appPage-body">
                    <h1>App Page is running now</h1>
                </div>
            </StoreContainer>
        </div>
    </div>

}


export default AppPage
