
import React,{lazy, Suspense} from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import {Box, LinearProgress} from "@mui/material"

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

          <Route path="admin" element={<AdminContainer />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="upload" element={<Upload />} />
          </Route>

          <Route path="login" element={<AuthContainer />}>
            <Route index element={<Login />} />
          </Route>

          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </Suspense>
    </div>
  );
}
 