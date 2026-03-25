import React from "react";
import { Mail, ExternalLink, Film, Gamepad2, Zap } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="font-black text-2xl tracking-tighter text-indigo-600 italic">
          PORTFOLIO.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
          <a href="#projects" className="hover:text-indigo-600 transition">
            Projects
          </a>
          <a href="#education" className="hover:text-indigo-600 transition">
            Education
          </a>
          <a href="#skills" className="hover:text-indigo-600 transition">
            Skills
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero / Profile */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-32">
          <div className="text-center md:text-left flex-1">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 leading-none uppercase">
              Xavier Bob Vitualla
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mb-8 leading-relaxed">
              BSIT 2nd Year Student at{" "}
              <span className="text-indigo-600 font-semibold underline decoration-2 underline-offset-4">
                Ateneo de Davao University
              </span>
              . Currently building modern web experiences with React and
              Tailwind.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/xavier-vitualla-7176ba274/"
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-600 transition shadow-lg flex items-center gap-2"
              >
                <Mail size={18} /> Get in touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-100 rounded-full blur-2xl opacity-50"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-0">
              <img
                src="./profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover hover:grayscale transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* Projects Section - Statically Typed */}
        <section id="projects" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 uppercase">
              Recent Work
            </h2>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <a
              className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              href="https://github.com/Xav2eks/FavoriteMovies"
            >
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-indigo-50 transition-colors">
                <Film className="text-indigo-500" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-3">FavoriteMovies Web App</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                A React-based platform designed to curate and save personal
                drama collections. Features a clean interface for managing
                'must-watch' lists.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                  React
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                  JavaScript
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                  CSS
                </span>
              </div>
            </a>

            {/* Project 2 */}
            <a
              href="https://github.com/Xav2eks/BoredWebApp"
              className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-indigo-50 transition-colors">
                <Gamepad2 className="text-indigo-500" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-3">Drum Memory Game</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                A pattern-recognition web based game developed using jQuery.
                Inspired by the Udemy Web Development Bootcamp, focusing on DOM
                manipulation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                  jQuery
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                  JavaScript
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                  CSS
                </span>
              </div>
            </a>

            {/* Project 3 */}
            <a
              href="https://github.com/Xav2eks/BoredWebApp"
              className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-indigo-50 transition-colors">
                <Zap className="text-indigo-500" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-3">Bored Web App</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                A productivity tool that generates random activities via API
                calls. Users can filter results based on number of participants,
                or type. Inspired from Udemy Bootcamp.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                  API Integration
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                  JavaScript
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                  Axios
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">
                  Tailwind
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Education & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* Education */}
          <section id="education">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-black uppercase tracking-tight">
                Education
              </h2>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>
            <div className="relative pl-8 border-l-2 border-indigo-100">
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
              <h3 className="text-xl font-bold italic">
                BS Information Technology
              </h3>
              <p className="text-indigo-600 font-bold text-sm uppercase tracking-wide">
                Ateneo de Davao University
              </p>
              <p className="text-slate-500 mt-2 font-medium">
                2nd Year Undergraduate
              </p>
            </div>
          </section>

          {/* Skills - Statically Typed */}
          <section id="skills">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-black uppercase tracking-tight">
                Skills
              </h2>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-indigo-600 transition-colors">
                JavaScript
              </span>
              <span className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-indigo-600 transition-colors">
                React
              </span>
              <span className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-indigo-600 transition-colors">
                TypeScript
              </span>
              <span className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-indigo-600 transition-colors">
                CSS
              </span>
              <span className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-indigo-600 transition-colors">
                Tailwind CSS
              </span>
              <span className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-indigo-600 transition-colors">
                GIT
              </span>
              <span className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-indigo-600 transition-colors">
                GITHUB
              </span>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 font-medium tracking-tight">
          Built with React & Tailwind • 2026 ADDU Student
        </p>
      </footer>
    </div>
  );
}
