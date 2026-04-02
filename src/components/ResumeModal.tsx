import { motion, AnimatePresence } from "motion/react";
import { X, Download, Printer, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { personalInfo } from "../data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header / Actions */}
            <div className="flex items-center justify-between p-6 border-b bg-slate-50 sticky top-0 z-10">
              <h2 className="text-xl font-display font-bold text-slate-900">Resume</h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="p-2 hover:bg-slate-200 rounded-lg text-slate-600 transition-colors flex items-center gap-2 text-sm font-medium"
                  title="Print Resume"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Print</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-red-100 hover:text-red-600 rounded-lg text-slate-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-white text-slate-900 font-sans print:p-0 print:overflow-visible">
              <div id="resume-content" className="max-w-3xl mx-auto space-y-8 print:max-w-none">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b-2 border-slate-900 pb-6">
                  <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">
                      MD. Shoeb Akther Shanto
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>shoebshanto376@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>01606094039</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Basundhara R/A</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4" />
                        <span>linkedin.com/in/shoeb-shanto</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        <span>github.com/shoeb177</span>
                      </div>
                    </div>
                  </div>
                  <img 
                    src={personalInfo.profilePic} 
                    alt="Profile" 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover border-2 border-slate-900 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Summary */}
                <div className="space-y-2">
                  <p className="text-sm leading-relaxed text-slate-700 italic">
                    Motivated computer science and engineering student at AIUB with a strong interest in data science and artificial intelligence. Skilled in Python, SQL, and data-driven problem solving, with programming experience in C++, Java, C#, R, and Python, and a passion for practical implementation and continuous learning.
                  </p>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <h2 className="text-lg font-bold uppercase border-b border-slate-300 pb-1">Education</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">American International University-Bangladesh Dhaka, Bangladesh</h3>
                        <p className="text-sm">B.Sc in CSE (CGPA-3.14)</p>
                      </div>
                      <span className="text-sm font-medium">2022 – 2026</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">Police Line School & College Kushtia</h3>
                        <p className="text-sm">HSC (Science) GPA-4.33</p>
                      </div>
                      <span className="text-sm font-medium">2018 – 2020</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">Kutubpur School & college</h3>
                        <p className="text-sm">SSC (Science) GPA-4.33</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  <h2 className="text-lg font-bold uppercase border-b border-slate-300 pb-1">Skills</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm">Frontend:</h3>
                      <p className="text-sm text-slate-600">HTML, CSS, JavaScript, XML, JSON</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm">Backend:</h3>
                      <p className="text-sm text-slate-600">Python, PHP, Java, C#, SQL</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm">Systems:</h3>
                      <p className="text-sm text-slate-600">C++, Java, C#, C</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm">ML & Data:</h3>
                      <p className="text-sm text-slate-600">Python, R, TensorFlow</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm">Graphics:</h3>
                      <p className="text-sm text-slate-600">OpenGL</p>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-4">
                  <h2 className="text-lg font-bold uppercase border-b border-slate-300 pb-1">Projects</h2>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-bold">Car rental System (Web)</h3>
                      <p className="text-sm text-slate-700">
                        • A web-based Car Rental System developed using HTML, PHP, JavaScript, and JSON that allows users to browse vehicles, book rentals, and manage reservations efficiently.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Real-Time-MNIST-Digit-Recognition</h3>
                      <p className="text-sm text-slate-700">
                        • Built a CNN-based real-time digit recognition system with webcam input, image preprocessing, and prediction visualization.
                      </p>
                      <p className="text-xs font-medium text-slate-500 italic">Tools: Python, OpenCV, TensorFlow</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Hotel Management System</h3>
                      <p className="text-sm text-slate-700">
                        • Developed a C# & MySQL-based management system for room bookings, guest records, and billing with secure database operation and real-time update.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">Data Analysis AI Non-AI</h3>
                      <p className="text-sm text-slate-700">
                        • AI vs Non-AI Scientific Articles uses contrastive topic modeling to identify and compare key themes between AI focused and non-AI scientific research.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certificates */}
                <div className="space-y-4">
                  <h2 className="text-lg font-bold uppercase border-b border-slate-300 pb-1">Certificates</h2>
                  <div className="space-y-1">
                    <h3 className="font-bold">Cisco Networking Academy IT Essentials Certificate</h3>
                    <p className="text-sm text-slate-600">Cisco, 2022</p>
                  </div>
                </div>

                {/* References */}
                <div className="space-y-4 pb-8">
                  <h2 className="text-lg font-bold uppercase border-b border-slate-300 pb-1">References</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm">Mahmuda Nasrin</h3>
                      <p className="text-xs text-slate-600 italic">Assistant Director(Legal and License), Bangladesh Telecommunication Regulatory Commission(BTRC)</p>
                      <p className="text-xs text-slate-600">mahmuda@btrc.gov.bd, +880 1550-080209</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm">MIRZA ASIF MAHMUD</h3>
                      <p className="text-xs text-slate-600 italic">Lecturer, Computer Science (CS), American International University-Bangladesh</p>
                      <p className="text-xs text-slate-600">mirza.asif@aiub.edu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
