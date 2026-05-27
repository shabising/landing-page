import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../components/Container";
import ThemeToggle from "../components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        py-6
        sticky
        top-0
        z-50
        backdrop-blur-xl
        bg-white/70
        dark:bg-[#111111]/70
        border-b
        border-gray-200
        dark:border-white/10
      "
    >
      <Container>

        <div className="flex items-center justify-between">

          <h1 className="font-display uppercase tracking-wider text-2xl">
            Portfolio
          </h1>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="
                transition
                duration-300
                hover:text-pink-500
                hover:-translate-y-0.5"
            >
              Home
            </a>

            <a
              href="#projects"
              className="
                transition
                duration-300
                hover:text-pink-500
                hover:-translate-y-0.5"
            >
              Projects
            </a>

            <a
              href="#"
              className="
                transition
                duration-300
                hover:text-pink-500
                hover:-translate-y-0.5"
            >
              About
            </a>

            <a
              href="#contact"
              className="
                transition
                duration-300
                hover:text-pink-500
                hover:-translate-y-0.5"
            >
              Contact
            </a>

            <ThemeToggle />
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              mt-6
              rounded-2xl
              border
              border-gray-300
              dark:border-gray-800
              p-6
              bg-white/70
              dark:bg-white/5
              backdrop-blur-xl
              flex
              flex-col
              gap-6
            "
          >
            <a href="#" className="transition duration-300 hover:text-pink-500">Home</a>
            <a href="#projects" className="transition duration-300 hover:text-pink-500">Projects</a>
            <a href="#" className="transition duration-300 hover:text-pink-500">About</a>
            <a href="#contact" className="transition duration-300 hover:text-pink-500">Contact</a>

            <ThemeToggle />
          </motion.div>
        )}

      </Container>
    </header>
  );
}