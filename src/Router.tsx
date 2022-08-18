
import React,{lazy, Suspense} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./layouts/Header/Header";

const Upload  = lazy(() => import("./screens/Home/Home"));
const Dashboard = lazy(() => import("./screens/Dashboard/Dashboard"));


export default function AppRouter() {
  return (
    <div>
        <Header />
         <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
        </Suspense>
    </div>
  );
}