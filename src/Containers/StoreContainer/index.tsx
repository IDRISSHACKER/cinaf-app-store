import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../layouts/Footer/Footer";
import Header from './../../layouts/Header/Header';

export default () => {

  return (
    <div>
      <section>
        <Header />
      </section>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
