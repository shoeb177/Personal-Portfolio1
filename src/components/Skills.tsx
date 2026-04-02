import { motion } from "motion/react";
import { skillCategories } from "../data/portfolio";
import Tilt from "react-parallax-tilt";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical toolkit, from programming languages to specialized AI frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1500}
                className="glass p-8 rounded-3xl space-y-6 shadow-sm h-full"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/10 hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
