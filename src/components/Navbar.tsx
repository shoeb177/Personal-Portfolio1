import { motion } from "motion/react";

export default function Navbar({ onOpenResume }: { onOpenResume: () => void }) {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <div className="glass flex items-center gap-2 px-2 py-2 rounded-2xl pointer-events-auto shadow-lg border-white/10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all rounded-xl hover:bg-white/10"
          >
            {item.name}
          </a>
        ))}
        <button
          onClick={onOpenResume}
          className="px-4 py-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-all rounded-xl hover:bg-white/10"
        >
          Resume
        </button>
      </div>
    </motion.nav>
  );
}
