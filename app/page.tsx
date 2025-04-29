import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";


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
