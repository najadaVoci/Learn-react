import { Routes, Route } from "react-router-dom";
import "./app.scss";
import Homepage from "./pages/homepage/homepage";
import About from "./pages/about/about";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HooksPage from "./pages/hooks/hooks";
import CalculateTheSum from "./pages/calculate/calculate";
import JSONPlaceholderData from "./pages/fetchData/fetchData";
import CurrentTime from "./pages/currentTime/currentTime";
import Accordions from "./components/accordion/accordion";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="hooks" element={<HooksPage />} />
        <Route path="calculate" element={<CalculateTheSum />} />
        <Route path="fetch" element={<JSONPlaceholderData />} />
        <Route path="time" element={<CurrentTime />} />
        <Route path="accordion" element={<Accordions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
