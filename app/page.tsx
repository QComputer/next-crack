import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import RoastProfiling from "./components/RoastProfiling";
import Products from "./components/Products";
import BestCrack from "./components/BestCrack";
import SpecialDiscount from "./components/SpecialDiscount";
import Offers from "./components/Offers";
import Courses from "./components/Courses";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <RoastProfiling />
      <Products />
      <BestCrack />
      <SpecialDiscount />
      <Offers />
      <Courses />
      <Blog />
      <Footer />
    </>
  );
}
