import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-display font-bold text-white">
            {personalInfo.name}
          </h3>
          <p className="text-sm text-slate-400 flex items-center justify-center md:justify-start gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> in 2026
          </p>
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ y: -2 }}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-2xl text-slate-400 hover:text-white transition-colors shadow-sm"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-2xl text-slate-400 hover:text-blue-400 transition-colors shadow-sm"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            href={`mailto:${personalInfo.email}`}
            className="p-3 glass rounded-2xl text-slate-400 hover:text-red-400 transition-colors shadow-sm"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>

        <p className="text-sm text-slate-500">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
