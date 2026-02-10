"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitHubIcon } from "@/src/components/Icons";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "AI Systems", icon: "🤖" },
    { name: "LLMs / RAG", icon: "🧠" },
    { name: "FastAPI", icon: "🐍" },
    { name: "Spring Boot", icon: "🌱" },
    { name: "AWS", icon: "☁️" },
    { name: "Node.js", icon: "⬢" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
  { name: "Kotlin", icon: "📱" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚓" },
    { name: "SQL", icon: "🗄️" },
    { name: "Android SDK", icon: "🤖" },
  ];

  const stats = [
    { value: "2+", label: "Years Experience", suffix: "in Production" },
    { value: "100K+", label: "Users Impacted", suffix: "Worldwide" },
    { value: "15+", label: "Projects", suffix: "Delivered" },
    { value: "99.9%", label: "System Uptime", suffix: "Average" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="
        relative min-h-screen flex items-center overflow-hidden
        bg-gradient-to-br from-black via-neutral-950 to-sky-950/20
      "
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(56, 189, 248, 0.03) 0%, transparent 50%)`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: PHOTO + STATS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Profile Photo Container */}
            <motion.div
              className="relative group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glowing border effect */}
              <div
                className={`
                  absolute -inset-4 rounded-3xl
                  bg-gradient-to-r from-sky-500/30 via-transparent to-purple-500/30
                  blur-xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                `}
              />

              {/* Main photo */}
              <div
                className="
                  relative w-72 h-96 lg:w-80 lg:h-[28rem]
                  rounded-2xl overflow-hidden
                  border-2 border-neutral-800/80
                  group-hover:border-sky-500/50
                  transition-all duration-500
                  shadow-2xl shadow-black/70
                "
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Antara Bhavsar"
                  width={500}
                  height={448}
                  className="object-cover object-top w-full h-full"
                  priority
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 
                    bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
              </div>

              {/* Floating tech badge */}
              <motion.div
                animate={{
                  y: isHovering ? [-5, 5, -5] : [0, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute -top-4 -right-4
                  bg-gradient-to-br from-sky-500 to-cyan-400
                  text-black font-bold px-4 py-2 rounded-xl
                  shadow-lg shadow-sky-500/30
                  flex items-center gap-2
                "
              >
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                <span className="text-sm">Open to Work</span>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12 w-full max-w-md">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="
                    bg-neutral-900/60 backdrop-blur-sm
                    border border-neutral-800/50
                    rounded-xl p-4
                    hover:border-sky-500/30
                    transition-all duration-300
                    group
                  "
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {stat.suffix}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Intro badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                inline-flex items-center gap-2
                bg-neutral-900/60 backdrop-blur-sm
                border border-neutral-800
                rounded-full px-4 py-2
                mb-8
              "
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-300">
                Software Engineer & AI System Developer
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="text-white">Antara</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                Bhavsar
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl mt-6 text-slate-300 leading-relaxed">
              Building the future of{" "}
              <span className="text-sky-400 font-semibold">
                AI-powered applications
              </span>{" "}
              with scalable systems and exceptional user experiences
            </p>

            {/* Description */}
            <div className="mt-8 space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in creating production-grade systems that blend
                cutting-edge AI with robust web technologies. From{" "}
                <span className="text-cyan-300">LLM-powered pipelines</span> to{" "}
                <span className="text-cyan-300">high-performance applications</span>,
                I bridge the gap between research and real-world impact.
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                Currently enhancing AI research systems at{" "}
                <span className="text-sky-400 font-medium">
                  Indiana University
                </span>{" "}
                while bringing enterprise-scale AI solutions to life with experience
                from{" "}
                <span className="text-sky-400 font-medium">Amazon</span> and{" "}
                <span className="text-sky-400 font-medium">Motorola</span>.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
                <p className="text-sm uppercase tracking-widest text-slate-500 font-medium">
                  Tech Stack
                </p>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`
                      flex items-center gap-2
                      bg-gradient-to-br from-neutral-900 to-neutral-800
                      backdrop-blur-sm
                      border border-neutral-700
                      px-4 py-3 rounded-xl text-sm
                      hover:border-sky-500 hover:text-sky-300
                      hover:shadow-lg hover:shadow-sky-500/10
                      transition-all duration-300
                      cursor-default
                      ${index < 4 ? "lg:scale-105" : ""}
                    `}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-12 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  relative overflow-hidden
                  bg-gradient-to-r from-sky-500 to-cyan-400
                  text-black font-semibold
                  px-8 py-4 rounded-xl
                  shadow-lg shadow-sky-500/30
                  hover:shadow-xl hover:shadow-sky-500/50
                  transition-all duration-300
                  group
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
                <div
                  className="
                    absolute inset-0 bg-gradient-to-r from-white/20 to-transparent
                    -translate-x-full group-hover:translate-x-full
                    transition-transform duration-500
                  "
                />
              </motion.a>

              <motion.a
                href="https://github.com/asb404"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  flex items-center gap-2
                  bg-neutral-900/80 backdrop-blur-sm
                  border border-neutral-700
                  text-white font-semibold
                  px-8 py-4 rounded-xl
                  hover:border-sky-500 hover:text-sky-300
                  hover:shadow-lg hover:shadow-sky-500/10
                  transition-all duration-300
                "
              >
                <span className="text-xl"><GitHubIcon size={20} /></span>
                GitHub
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  flex items-center gap-2
                  bg-transparent
                  border-2 border-sky-500/30
                  text-sky-400 font-semibold
                  px-8 py-4 rounded-xl
                  hover:border-sky-500 hover:bg-sky-500/10
                  transition-all duration-300
                "
              >
                <span>📧</span>
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue with animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm text-slate-500 font-medium tracking-widest">
            EXPLORE
          </div>
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-sky-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 text-4xl opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ⚡
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-10 text-3xl opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🚀
      </motion.div>
    </section>
  );
}