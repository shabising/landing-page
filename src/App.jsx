import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <main
      className="
        min-h-screen
        bg-white
        text-black
        dark:bg-[#111111]
        dark:text-white
        transition-all
        duration-300
        overflow-hidden
        relative
      "
    >

      <div
        className="
          fixed
          top-[-200px]
          right-[-200px]
          w-[500px]
          h-[500px]
          bg-pink-500/20
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          fixed
          bottom-[-200px]
          left-[-200px]
          w-[500px]
          h-[500px]
          bg-blue-500/20
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <Navbar />
      <Hero />
      <Projects />
      <Footer />

    </main>
  );
}