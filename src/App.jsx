import { useState } from "react";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Navbar from "./components/Navbar.jsx";
import Product from "./components/Product.jsx";
import Slider from "./components/Slider.jsx";
import "./styles/App.css";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <Navbar setCurrentIndex={setCurrentIndex} />
      <Slider currentIndex={currentIndex} />
      <Features />
      <Product currentIndex={currentIndex} />
      <Gallery />
      <Footer />
    </div>
  );
}
