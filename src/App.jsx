import { Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { i18n } from "../i18n.js/";

import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import DinoTrade from "./components/pages/dinos/DinoTrade.jsx";
import ItemTrade from "./components/pages/items/ItemTrade.jsx";
import SaddleTrade from "./components/pages/saddles/SaddleTrade.jsx";
import TekTrade from "./components/pages/tek/TekTrade.jsx";
import BossTrade from "./components/pages/bosses/BossTrade.jsx";

export default function App() {
  const { t } = useTranslation();

  return (
    <div className=" bg-background text-text grid grid-rows-main min-h-screen">
      <Header />
      <Navbar />
      {/* Start routes */}
      <div>
      <Routes>
        <Route path="dinos" element={<DinoTrade />} />
        <Route path="items" element={<ItemTrade />} />
        <Route path="saddles" element={<SaddleTrade />} />
        <Route path="tek" element={<TekTrade />} />
        <Route path="bosses" element={<BossTrade />} />
      </Routes>
      </div>
      {/* End routes */}
      <Footer />
    </div>
  );
}
