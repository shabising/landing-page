import { motion } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>

        {/* TITLE */}
        <div className="mb-14">
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
            Featured
            <br />
            Projects
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                rounded-[32px]
                bg-white/70
                dark:bg-white/5
                backdrop-blur-xl
                border
                border-gray-300
                dark:border-white/10
                overflow-hidden
                shadow-lg
                shadow-pink-500/5
                transition
                duration-500
                hover:scale-[1.02]
                hover:-translate-y-2
                hover:border-pink-400/40
                hover:shadow-xl
                hover:shadow-pink-500/10
                ${project.large ? "md:row-span-2 min-h-[320px] md:min-h-[500px]" : "min-h-[240px]"}
              `}
            >
              {/* IMAGE */}
              <div
                className="
                  h-[220px]
                  md:h-[70%]
                  bg-gradient-to-br
                  from-pink-500
                  via-purple-500
                  to-orange-400
                "
              />

              {/* CONTENT */}
              <div className="p-8 flex items-end justify-between">
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                </div>

                {/* View Project button */}
                <Button variant="outline" className="text-sm shrink-0">
                  View →
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

      </Container>
    </section>
  );
}