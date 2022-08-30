import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";

export default function Page({ title, children }: any) {
  const [dTitle, setDTitle] = useState("");
  useEffect(() => {
    setDTitle(window.document.title);
    window.document.title = title;
    return () => {
      window.document.title = dTitle;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  }, [title]);

  return (
    <div className="page">
      {children}
      <ScrollToTop smooth />
    </div>
  );
}
