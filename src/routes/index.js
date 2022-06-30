import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import NotfoundPage from "pages/notfound";
import IndexPage from "pages/index";

function Routess() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", setupScreen);
    return () => window.removeEventListener("resize", setupScreen);
  }, []);

  const setupScreen = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotfoundPage />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
