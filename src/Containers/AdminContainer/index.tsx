import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../layouts/Header/AdminHeader";

export default () => {
  return (
    <div>
      <section>
        <AdminHeader />
      </section>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
