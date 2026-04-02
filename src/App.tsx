/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Scene from "./components/Scene";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="relative font-sans scroll-smooth">
      <Scene />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      
      {/* Floating Social Bar (Optional, since it's in Footer, but user asked for floating/sticky footer) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 md:hidden">
        <div className="glass px-6 py-3 rounded-full flex items-center gap-6 shadow-2xl shadow-blue-500/20">
          <a href="#home" className="text-slate-400 hover:text-blue-600 transition-colors">Home</a>
          <button onClick={() => setIsResumeOpen(true)} className="text-blue-400 hover:text-blue-600 transition-colors">Resume</button>
          <a href="#contact" className="text-slate-400 hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
    </main>
  );
}
