import { Routes, Route } from "react-router-dom";
import { useTranslation, initReactI18next } from 'react-i18next';

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      {/* <Pannel /> */}
      {/* Start routes */}
      <Routes>
        <Route path="dinos" element={<DinoTrade />} />
        <Route path="items" element={<ItemTrade />} />
        <Route path="saddles" element={<SaddleTrade />} />
        <Route path="tek" element={<TekTrade />} />
        <Route path="bosses" element={<BossTrade />} />
      </Routes>
      {/* End routes */}
      <Footer />
    </div>
  );
}
