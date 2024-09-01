import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div >
      <div className="absolute overflow-hidden inset-0 z-0 flex items-center justify-center ">
        <div className="gradient w-full h-full"></div>
      </div>
  
   
      <Navbar />
      <HeroSection />
      <Intro />
      <Features />
      <Footer/>
    </div>
  );
}
