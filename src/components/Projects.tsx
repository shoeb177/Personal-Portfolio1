import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/portfolio";
import { Github, ExternalLink, Code, Filter } from "lucide-react";
import Tilt from "react-parallax-tilt";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((p) => {
      p.techStack.split(", ").forEach((t) => techs.add(t));
    });
    return ["All", ...Array.from(techs).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.techStack.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
              Projects Dashboard
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              A curated selection of my work in data science, machine learning, and full-stack development.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Software
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full" />
              Data
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-slate-400 font-medium">
            <Filter className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wider">Filter by Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeFilter === tech
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={1500}
                  className="group relative glass p-8 rounded-3xl space-y-6 shadow-sm border border-white/5 hover:border-blue-500/30 h-full"
                >
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-white/5 rounded-2xl text-slate-400 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                      <Code className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {project.techStack.split(", ").map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 rounded-lg text-xs font-semibold text-slate-500 uppercase tracking-tight"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center pt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/shoeb177"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass text-white rounded-2xl font-semibold flex items-center gap-2 shadow-sm hover:bg-white/10 transition-colors"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}
