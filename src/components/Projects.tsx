"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icons } from "@/src/components/Icons";

// Add your projects here - update this array with your actual projects
const projects = [
    {
        id: 1,
        title: "Autonomous Problem-Solving Agent",
        description:
          "An AI agent that autonomously diagnoses issues, retrieves context, and executes resolution workflows using LLMs and tool-based reasoning.",
        fullDescription:
          "Designed and built an autonomous AI agent capable of end-to-end problem solving for operational and system issues. The agent uses LLM-driven reasoning to analyze problem statements, retrieve relevant context via embedding-based semantic search, and invoke tools to recommend or execute corrective actions. Implemented agentic workflows with Retrieval-Augmented Generation (RAG), enabling accurate, context-aware responses over large operational datasets. Deployed as a scalable backend service with low-latency inference and robust monitoring.",
        tech: ["Python","FastAPI","LLMs","RAG","Vector Databases",],
        link: "https://github.com/asb404/PSA-Agent",
        demo: "",
        year: 2025,
        role: "AI Engineer",
        isFeatured: true,
    },
    {
        id: 2,
        title: "SentiCloud",
        description:
          "Scalable cloud-native ML system for parallel sentiment analysis with high-throughput message processing.",
        fullDescription:
          "Designed and built SentiCloud, a scalable cloud-based machine learning platform for parallel sentiment analysis. Developed and operated a cloud-native Kubernetes system on Google Cloud Platform (GCP) with autoscaling and self-healing capabilities. The system processes high-volume streaming messages using distributed workers, achieving sustained throughput of over 5,000 messages per second with sub-second end-to-end latency. Implemented robust deployment, monitoring, and fault-tolerance mechanisms to ensure 99.9% service uptime under variable load.",
        tech: [
          "Python",
          "Machine Learning",
          "Sentiment Analysis",
          "Distributed Systems",
          "Kubernetes",
          "Google Cloud Platform (GCP)",
          "Docker",
          "Autoscaling",
          "Cloud Monitoring"
        ],
        link: "https://github.com/asb404/senti-cloud",
        demo: "",
        year: 2025,
        role: "Cloud ML Engineer",
        isFeatured: true,
      },
      {
        id: 3,
        title: "Intelligent Credit Risk & Limit Optimization",
        description:
          "Machine learning system for credit risk assessment and dynamic credit limit optimization.",
        fullDescription:
          "Designed and implemented an end-to-end machine learning pipeline to assess customer credit risk and optimize credit limits. The system includes large-scale data preprocessing, feature engineering, model selection, and hyperparameter tuning to improve predictive accuracy and robustness. Leveraged ensemble-based algorithms, including XGBoost and Scikit-learn models, to achieve 91% classification accuracy, representing a 12% performance improvement over baseline approaches. The optimized risk predictions enabled more reliable credit decisions and informed dynamic credit limit strategies.",
        tech: [
          "Python",
          "Machine Learning",
          "Credit Risk Modeling",
          "Feature Engineering",
          "XGBoost",
          "Scikit-learn",
          "Hyperparameter Tuning",
          "Data Preprocessing"
        ],
        link: "https://github.com/asb404/Intelligent-Optimal-Credit-Risk",
        demo: "",
        year: 2024,
        role: "Machine Learning Engineer",
        isFeatured: true,
      },
      {
        id: 4,
        title: "Scheduler Microservice",
        description:
          "A distributed scheduler microservice for managing and executing time-based and event-driven tasks in a microservices architecture.",
        fullDescription:
          "Designed and built a production-ready Scheduler Microservice to centralize cron-based and event-driven job execution across a distributed microservices ecosystem. The service exposes RESTful APIs to create, update, retrieve, delete, and manually trigger scheduled jobs, while leveraging RabbitMQ for asynchronous task dispatch and reliable message-driven execution. Implemented persistent job storage using a database to ensure durability and recovery across restarts. Containerized the service using Docker and deployed it on Kubernetes to enable horizontal scaling, fault tolerance, and seamless orchestration. The architecture promotes loose coupling, high availability, and independent deployment of scheduling logic.",
        tech: [
          "Java",
          "Spring Boot",
          "RabbitMQ",
          "MongoDB",
          "REST APIs",
          "Docker",
          "Kubernetes"
        ],
        link: "https://github.com/asb404/Schuduler-microservice",
        demo: "",
        year: 2025,
        role: "Backend Engineer",
        isFeatured: true,
    },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern portfolio built with Next.js and Tailwind CSS",
    fullDescription: "Designed and developed a responsive portfolio website with smooth animations, dark mode, and optimized performance. Features include project showcase, experience timeline, and contact form.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/asb404/Portfolio",
    demo: "https://antara.vercel.app",
    year: 2026,
    role: "Frontend Developer",
    isFeatured: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.isFeatured;
    if (filter === "ai") return project.tech.some(t => 
      t.toLowerCase().includes("ai") || 
      t.toLowerCase().includes("llm") ||
      t.toLowerCase().includes("openai") ||
      t.toLowerCase().includes("langchain")
    );
    if (filter === "web") return project.tech.some(t => 
      t.toLowerCase().includes("react") || 
      t.toLowerCase().includes("next") ||
      t.toLowerCase().includes("typescript") ||
      t.toLowerCase().includes("tailwind")
    );
    if (filter === "backend") return project.tech.some(t => 
      t.toLowerCase().includes("python") || 
      t.toLowerCase().includes("fastapi") ||
      t.toLowerCase().includes("aws") ||
      t.toLowerCase().includes("docker") ||
      t.toLowerCase().includes("redis")
    );
    return true;
  });

  const techStack = Array.from(
    new Set(projects.flatMap(p => p.tech))
  ).sort();

  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-xl max-w-3xl mx-auto">Projects</h2>
          
        </motion.div>

        {/* Filters & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          {/* View Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-slate-400 text-sm mr-3">View:</span>
              <div className="inline-flex items-center bg-neutral-900/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium transition-all
                    ${viewMode === "grid"
                      ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                      : "text-slate-400 hover:text-white"
                    }
                  `}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium transition-all
                    ${viewMode === "list"
                      ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                      : "text-slate-400 hover:text-white"
                    }
                  `}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          
        </motion.div>

        {/* Projects Grid */}
        <div className={`
          ${viewMode === "grid" 
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-8"
          }
        `}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`
                group relative
                bg-gradient-to-br from-neutral-900/80 to-black/50
                border border-neutral-800
                rounded-2xl overflow-hidden
                hover:border-sky-400/50
                transition-all duration-300
                hover:shadow-2xl hover:shadow-sky-500/10
                ${viewMode === "list" ? "flex flex-col md:flex-row" : ""}
              `}
            >
              {/* Glow effect */}
              <div className="
                absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-purple-500/5
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
              " />

              {/* Featured Badge */}
              {project.isFeatured && (
                <div className="
                  absolute top-4 right-4 z-10
                  px-4 py-1.5 rounded-full
                  bg-gradient-to-r from-yellow-500 to-amber-500
                  text-black text-sm font-bold
                  shadow-lg shadow-yellow-500/30
                  flex items-center gap-1.5
                ">
                  <span>⭐</span>
                  <span>Featured</span>
                </div>
              )}

              {/* Project Content */}
              <div className={`p-8 relative z-10 ${viewMode === "list" ? "flex-1" : ""}`}>
                {/* Year & Role */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="
                    px-3 py-1 rounded-full
                    bg-sky-500/10 text-sky-400 text-sm font-medium
                    border border-sky-500/20
                  ">
                    {project.year}
                  </span>
                  <span className="text-slate-400 text-sm">
                    {project.role}
                  </span>
                </div>

                {/* Project Title - LARGER and more prominent */}
                <h3 className="
                  text-2xl font-bold text-white mb-4
                  group-hover:text-sky-300 transition-colors duration-300
                ">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {viewMode === "list" ? project.fullDescription : project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1.5 rounded-lg text-xs font-medium
                        bg-sky-500/10 text-sky-400
                        border border-sky-500/20
                        hover:bg-sky-500/20 hover:border-sky-500/30
                        transition-all duration-200
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      px-5 py-2.5 rounded-lg
                      bg-gradient-to-r from-sky-500 to-cyan-400
                      text-white font-semibold
                      hover:shadow-lg hover:shadow-sky-500/30
                      transition-all duration-300
                      group/link
                    "
                  >
                    <Icons.GitHub size={18} className="text-white" />
                    <span>View Code</span>
                    <Icons.ChevronRight 
                      size={16} 
                      className="group-hover/link:translate-x-1 transition-transform" 
                    />
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="
                absolute bottom-0 left-0 right-0 h-1
                bg-gradient-to-r from-transparent via-sky-500/50 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
              " />
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/asb404?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              px-8 py-4 rounded-xl
              bg-gradient-to-br from-neutral-900 to-black
              border border-neutral-800
              text-white font-semibold text-lg
              hover:bg-neutral-800 hover:border-neutral-700
              hover:shadow-xl hover:shadow-sky-500/10
              transition-all duration-300
              group
            "
          >
            <Icons.GitHub size={24} />
            <span>Explore All Projects on GitHub</span>
            <Icons.ChevronRight 
              size={20} 
              className="group-hover:translate-x-2 transition-transform" 
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}