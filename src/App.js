import { Routes, Route } from "react-router-dom";
import "./app.scss";
import Homepage from "./pages/homepage/homepage";
import About from "./pages/about/about";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HooksPage from "./pages/hooks/hooks";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="hooks" element={<HooksPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
