"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/src/components/Icons";

const navItems = [
  { label: "Home", href: "#home", icon: <Icons.Home size={18} /> },
  { label: "Experience", href: "#experience", icon: <Icons.Briefcase size={18} /> },
  { label: "Projects", href: "#projects", icon: <Icons.Code size={18} /> },
  { label: "Contact", href: "#contact", icon: <Icons.Email size={18} /> },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/asb404", icon: <Icons.GitHub size={18} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/antara-bhavsar-74b7a4187/", icon: <Icons.LinkedIn size={18} /> },
  { label: "Email", href: "mailto:antarabhavsar44@gmail.com", icon: <Icons.Email size={18} /> },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Only add event listener on client side
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${isScrolled 
            ? "bg-black/80 backdrop-blur-xl border-b border-neutral-800/50 py-3" 
            : "bg-transparent py-4"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name with animation */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="
                w-8 h-8 rounded-lg
                bg-gradient-to-br from-sky-500 to-cyan-400
                flex items-center justify-center
                group-hover:rotate-12
                transition-transform duration-300
              ">
                <Icons.Code size={18} className="text-black" />
              </div>
              <div className="
                absolute inset-0 rounded-lg
                bg-gradient-to-br from-sky-500 to-cyan-400
                blur-md opacity-0 group-hover:opacity-40
                transition-opacity duration-300
              " />
            </div>
            <span className="
              text-lg font-bold tracking-tight text-white
              hidden sm:block
            ">
              Antara <span className="text-sky-400">Bhavsar</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                className="
                  relative px-4 py-2
                  text-sm font-medium
                  rounded-lg
                  transition-colors duration-200
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={`
                    relative z-10 flex items-center gap-2
                    ${activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                    }
                  `}
                >
                  {item.icon}
                  {item.label}
                </span>

                {/* Active indicator */}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="
                      absolute inset-0
                      bg-gradient-to-r from-sky-500/20 to-cyan-400/20
                      border border-sky-500/30
                      rounded-lg
                      shadow-lg shadow-sky-500/10
                    "
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Hover effect */}
                {hoveredItem === item.href && activeSection !== item.href.substring(1) && (
                  <div className="
                    absolute inset-0
                    bg-neutral-800/50
                    rounded-lg
                    border border-neutral-700
                  " />
                )}
              </motion.button>
            ))}
          </div>

          {/* Social Links + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    p-2 rounded-lg
                    bg-neutral-900/50
                    border border-neutral-800
                    text-slate-300 hover:text-white hover:border-sky-500/50
                    transition-all duration-200
                    hover:shadow-lg hover:shadow-sky-500/10
                  "
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1ys0QiERRUxpTa40KFDUgZkWZH8mbzbBp/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="
                px-5 py-2 rounded-lg
                bg-gradient-to-r from-sky-500 to-cyan-400
                text-black font-semibold text-sm
                hover:shadow-lg hover:shadow-sky-500/30
                transition-shadow duration-200
                flex items-center gap-2
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icons.Briefcase size={16} className="text-black" />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              md:hidden p-2
              rounded-lg
              bg-neutral-900/50
              border border-neutral-800
              text-white
            "
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-4 h-0.5 bg-current rounded-full
                  transition-all duration-300
                  ${isMobileMenuOpen ? "rotate-45 top-1/2" : "top-1/3"}
                `}
              />
              <span
                className={`
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-4 h-0.5 bg-current rounded-full
                  transition-all duration-300
                  ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}
                `}
              />
              <span
                className={`
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-4 h-0.5 bg-current rounded-full
                  transition-all duration-300
                  ${isMobileMenuOpen ? "-rotate-45 top-1/2" : "top-2/3"}
                `}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-6 py-4 border-t border-neutral-800 bg-black/95 backdrop-blur-xl">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className={`
                        w-full text-left px-4 py-3 rounded-lg
                        text-base font-medium flex items-center gap-3
                        transition-all duration-200
                        ${activeSection === item.href.substring(1)
                          ? "bg-gradient-to-r from-sky-500/20 to-cyan-400/20 text-white"
                          : "text-slate-300 hover:bg-neutral-800/50 hover:text-white"
                        }
                      `}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.icon}
                      {item.label}
                      {activeSection === item.href.substring(1) && (
                        <Icons.ChevronRight className="ml-auto text-sky-400" size={16} />
                      )}
                    </motion.button>
                  ))}

                  <div className="pt-4 border-t border-neutral-800">
                    <div className="flex items-center justify-between px-4 py-2">
                      {socialLinks.map((link) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 text-slate-300 hover:text-sky-400"
                          whileTap={{ scale: 0.9 }}
                        >
                          {link.icon}
                        </motion.a>
                      ))}
                    </div>

                    <motion.a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="
                        mt-3 w-full block text-center
                        px-4 py-3 rounded-lg
                        bg-gradient-to-r from-sky-500 to-cyan-400
                        text-black font-semibold
                        flex items-center justify-center gap-2
                      "
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icons.Briefcase size={18} className="text-black" />
                      Download Resume
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Progress indicator - Fixed the SSR issue */}
      <div className="fixed top-0 left-0 w-full h-1 z-40">
        <motion.div
          className="h-full bg-gradient-to-r from-sky-500 to-cyan-400"
          animate={{
            width: `${scrollProgress}%`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              fixed bottom-6 right-6 z-40
              p-3 rounded-full
              bg-gradient-to-br from-sky-500 to-cyan-400
              text-black font-bold
              shadow-lg shadow-sky-500/30
              hover:shadow-xl hover:shadow-sky-500/50
              transition-shadow duration-200
            "
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            title="Back to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}