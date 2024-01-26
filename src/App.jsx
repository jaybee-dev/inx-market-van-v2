import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Pannel from "./components/Pannel.jsx";
import DinoTrade from "./components/dinotrade/DinoTrade.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import StuffTrade from "./components/stufftrade/StuffTrade.jsx";

export default function App() {
  return (
    <div>
        <Header />
        <Navbar />
        <Pannel />
        {/* Start routes */}
        <Routes>
          <Route path="dinos" element={<DinoTrade />} />
          <Route path="stuff" element={<StuffTrade />} />
        </Routes>
        {/* End routes */}
        <Footer />
    </div>
  );
}
