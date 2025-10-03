import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RoastProfiling from "@/components/RoastProfiling";
import Products from "@/components/Products";
import Courses from "@/components/Courses";
import SpecialDiscount from "@/components/SpecialDiscount";
import Offers from "@/components/Offers";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <RoastProfiling />
      <Products />
      <Courses />
      <SpecialDiscount />
      <Offers />
      <Blog />
    </>
  );
}
