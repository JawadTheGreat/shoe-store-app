import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Navbar from "./components/Navbar.jsx";
import Product from "./components/Product.jsx";
import Slider from "./components/Slider.jsx";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Features />
      <Product />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
