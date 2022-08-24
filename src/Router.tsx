
import React,{lazy, Suspense} from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Footer from "./layouts/Footer/Footer"

import Header from "./layouts/Header/Header"

const Upload  = lazy(() => import("./screens/Home/Home"))
const Dashboard = lazy(() => import("./screens/Dashboard/Dashboard"))
const Store = lazy(() => import("./screens/Store/Store"))
const Download = lazy( () => import('./screens/Download/Download'));


export default function AppRouter() {
  return (
    <div>
        <Header />
         <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/store" element={<Store />} />
                <Route path="/download" element={<Download />} />
                <Route path="*" element={<Navigate to="/store" />} />
              </Routes>
        </Suspense>
        <Footer />
    </div>
  );
}
