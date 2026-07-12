import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OCR from "./pages/OCR";
import Speech from "./pages/Speech";
import Translate from "./pages/Translate";
import About from "./pages/About";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/ocr" element={<OCR />} />

        <Route path="/speech" element={<Speech />} />

        <Route path="/translate" element={<Translate />} />

        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;