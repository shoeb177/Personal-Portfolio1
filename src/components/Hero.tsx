import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 shadow-sm border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new projects & Looking for an internship
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-white drop-shadow-2xl">
          {personalInfo.name}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-display font-medium text-slate-400">
          {personalInfo.title}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold flex items-center gap-2 shadow-lg shadow-white/10 hover:bg-slate-100 transition-colors"
          >
            Contact Me
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenResume}
            className="px-8 py-4 glass text-white rounded-2xl font-semibold flex items-center gap-2 shadow-sm hover:bg-white/10 transition-colors"
          >
            Resume
            <FileText className="w-4 h-4" />
          </motion.button>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold flex items-center gap-2 shadow-lg shadow-white/10 hover:bg-slate-100 transition-colors"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
