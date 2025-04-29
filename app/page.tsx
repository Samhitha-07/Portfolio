import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Contacts from "@/components/Contacts";

import { Nav } from "react-bootstrap";


export default function Home() {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </div>
    </main>
  );
}
