import Container from "../components/Container";
import Button from "../components/Button";

export default function Footer() {
  return (
    <footer id="contact" className="py-16">
      <Container>
        <div
          className="
            rounded-[32px]
            bg-white/70
            dark:bg-white/5
            backdrop-blur-xl
            border
            border-gray-300
            dark:border-white/10
            shadow-lg
            shadow-pink-500/5
            p-6
            sm:p-8
            md:p-12
          "
        >

          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <h2
                className="
                  font-display
                  uppercase
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  leading-none
                "
              >
                Let's
                <br />
                Work
                <br />
                Together
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Building modern digital experiences with clean UI and strong
                visual identity.
              </p>
              <Button className="mt-6 rounded-2xl">Contact Me</Button>
            </div>
          </div>

          {/* BOTTOM */}
          <div
            className="
              mt-12
              pt-6
              border-t
              border-gray-200
              dark:border-white/10
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-4
            "
          >
            <p className="text-sm text-gray-500">© 2026 Portfolio</p>

            <nav aria-label="Social links" className="flex gap-6 text-sm">
              <a href="#" className="transition duration-300 hover:text-pink-500">Twitter</a>
              <a href="#" className="transition duration-300 hover:text-pink-500">Linkedin</a>
              <a href="#" className="transition duration-300 hover:text-pink-500">Behance</a>
            </nav>
          </div>

        </div>
      </Container>
    </footer>
  );
}