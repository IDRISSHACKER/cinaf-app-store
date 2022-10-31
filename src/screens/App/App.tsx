// @ts-nocheck
import * as React from "react";
import { StoreContainer } from "../../components/container/container";
import Page from "../../components/Page";
import AppHead from "./components/AppHead";
import { ToastContainer } from "react-toastify";
import "./AppPage.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import paths from "./../../const/path";
import { getSoftware2 } from "../../redux/slices/softwareSlice/softwareSlice";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function AppPage() {
  const params = useParams()
  const dispatch = useDispatch();
  const [software, setSoftware] = React.useState({});

 const parseURI = (uri:string) => {
    const originalLocation = uri;
    const originalLocationSpliter = originalLocation.split("-");
    const slug = originalLocationSpliter[0];
    const appliId = parseInt(slug);

    return appliId;
  }

  React.useState(()=>{
    dispatch(getSoftware2(params.appuiId));
  },[])
  
  const soft = useSelector((state:any) => state.software2);

  return (
    <Page title="Telechargement de l'application">
      <div className="appPage">
        <div className="appPage-body">
          <StoreContainer>
            <AppHead app={soft} />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
          </StoreContainer>
        </div>
      </div>
    </Page>
  );
}

export default AppPage;
