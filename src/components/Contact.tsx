import { useState } from "react";
import { motion } from "motion/react";
import { personalInfo } from "../data/portfolio";
import { Mail, Github, Linkedin, Send, CheckCircle2, Phone } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/shoebshanto376@gmail.com`, { // Using Formspree for direct delivery
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSent(true);
        form.reset();
      } else {
        // Fallback to mailto if there's an issue
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        const subject = encodeURIComponent(`Portfolio Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Fallback to mailto on network error
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      const subject = encodeURIComponent(`Portfolio Message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out through any of the platforms below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${personalInfo.email}`}
            className="glass p-8 rounded-3xl flex flex-col items-center gap-4 text-center group card-hover shadow-sm"
          >
            <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <Mail className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-display font-bold text-white">Email</h3>
              <p className="text-sm text-slate-400">{personalInfo.email}</p>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${personalInfo.phone}`}
            className="glass p-8 rounded-3xl flex flex-col items-center gap-4 text-center group card-hover shadow-sm"
          >
            <div className="p-4 bg-green-500/10 rounded-2xl text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all">
              <Phone className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-display font-bold text-white">Phone</h3>
              <p className="text-sm text-slate-400">{personalInfo.phone}</p>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-8 rounded-3xl flex flex-col items-center gap-4 text-center group card-hover shadow-sm"
          >
            <div className="p-4 bg-white/10 rounded-2xl text-white group-hover:bg-white group-hover:text-black transition-all">
              <Github className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-display font-bold text-white">GitHub</h3>
              <p className="text-sm text-slate-400">@shoeb177</p>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-8 rounded-3xl flex flex-col items-center gap-4 text-center group card-hover shadow-sm"
          >
            <div className="p-4 bg-blue-700/10 rounded-2xl text-blue-500 group-hover:bg-blue-700 group-hover:text-white transition-all">
              <Linkedin className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-display font-bold text-white">LinkedIn</h3>
              <p className="text-sm text-slate-400">Shoeb Shanto</p>
            </div>
          </motion.a>
        </div>

        <div className="max-w-2xl mx-auto glass p-8 rounded-3xl shadow-sm space-y-8">
          <h3 className="text-2xl font-display font-bold text-white text-center">Quick Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-white placeholder:text-slate-500"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-white placeholder:text-slate-500"
              />
            </div>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={4}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none text-white placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg transition-all ${
                isSent 
                  ? "bg-green-500 text-white" 
                  : "bg-white text-slate-900 hover:bg-slate-100"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                "Processing..."
              ) : isSent ? (
                <>
                  Message Prepared! <CheckCircle2 className="w-4 h-4" />
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
            {isSent && (
              <p className="text-center text-sm text-green-400 animate-pulse">
                Your email client will open to send the message.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
