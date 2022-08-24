
import React,{lazy, Suspense} from "react"
import { Routes, Route, Navigate } from "react-router-dom"

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


export default function AppRouter() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
         
          <Route path="/admin/:path?">
            <AdminContainer>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/upload" element={<Upload />} />
            </AdminContainer>
          </Route>

          <Route>
            <StoreContainer>
              <Route path="/store" element={<Store />} />
              <Route path="/download" element={<Download />} />
              <Route path="/download/:uid" element={<AppPage />} />
            </StoreContainer>
          </Route>
          
          <Route path="*" element={<Navigate to="/store" />} />
          
        </Routes>
      </Suspense>
    </div>
  );
}
