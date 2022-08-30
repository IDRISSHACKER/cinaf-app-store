
import React,{lazy, Suspense} from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import {Box, LinearProgress} from "@mui/material"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// container
import AdminContainer from "./Containers/AdminContainer"
import AuthContainer from "./Containers/AuthContainer"
import StoreContainer from "./Containers/StoreContainer"

// store
const Store = lazy(() => import("./screens/Store/Store"))
const Download = lazy( () => import('./screens/Download/Download'));
const AppPage = lazy( ()=> import("./screens/App/App"))

// Admin
const Upload  = lazy(() => import("./screens/Home/Home"))
const Dashboard = lazy(() => import("./screens/Dashboard/Dashboard"))

// Auth
const Login = lazy(() => import("./screens/Login/Login"))


export default function AppRouter() {
  return (
    <div>
      <div>
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
      </div>
      <div>
        <Suspense
          fallback={
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<StoreContainer />}>
              <Route index element={<Store />} />
              <Route path="home" element={<Store />} />
              <Route path="download" element={<Download />} />
              <Route path="download/:appuiId" element={<AppPage />} />
            </Route>

            <Route
              path="admin"
              element={
                <ProtectedRoute>
                  <AdminContainer />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="upload" element={<Upload />} />
            </Route>

            <Route
              path="login"
              element={
                <PrivateRoute auth={true}>
                  <AuthContainer />
                </PrivateRoute>
              }
            >
              <Route index element={<Login />} />
            </Route>

            <Route path="*" element={<Navigate to="home" />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
 
const ProtectedRoute = ({children}:any) => {
  console.log(localStorage.getItem("token"));

  if (
    localStorage.getItem("token") === null ||
    localStorage.getItem("token") === undefined ||
    localStorage.getItem("token")!.length < 2
  ) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const PrivateRoute = ({ children }: any) => {

  if (
    localStorage.getItem("token") !== null ||
    localStorage.getItem("token") !== undefined
  ) {
    return children;
  }

  return <Navigate to="/" replace />;
};

