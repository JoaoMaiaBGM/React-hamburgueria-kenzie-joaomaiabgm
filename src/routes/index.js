import { Route, Routes } from "react-router-dom";

import HomePage from "../components/HomePage/homepage";
import About from "../components/AboutPage";
import Contact from "../components/ContactPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Sobre" element={<About />} />
      <Route path="/Contato" element={<Contact />} />
    </Routes>
  );
};

export default RoutesMain;
