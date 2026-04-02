import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio";
import { Github, Linkedin } from "lucide-react";
import Tilt from "react-parallax-tilt";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.02}
              className="relative aspect-square max-w-md mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10" />
              <div className="glass p-4 rounded-[2rem] overflow-hidden shadow-2xl border-white/10">
                <img
                  src={personalInfo.profilePic}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Tilt>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white">
                About Me
              </h2>
              <div className="w-20 h-1.5 bg-blue-500 rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                {personalInfo.aboutMe}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-2xl text-blue-400 hover:text-white hover:bg-blue-600 transition-all shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-2xl text-white hover:bg-white hover:text-black transition-all shadow-lg"
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
