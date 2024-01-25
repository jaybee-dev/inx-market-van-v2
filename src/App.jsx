import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Pannel from "./components/Pannel.jsx";
import DinoTrade from "./components/dinotrade/DinoTrade.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
        <Header />
        <Navbar />
        <Pannel />
        <DinoTrade />
        <Footer />
    </div>
  );
}
