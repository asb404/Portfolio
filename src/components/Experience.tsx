"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Software Developer (Research Assistant)",
        company: "Indiana University",
        period: "Mar 2025 – Present",
        description:
          "Research-focused engineering work on AI systems, data pipelines, and performance-critical computation.",
        points: [
          "Built FastAPI services using Claude and local LLMs to power agentic RAG pipelines for semantic access to Allen Brain Atlas datasets.",
          "Implemented tool-augmented LLM agents using LangChain and LangGraph with function calling and dynamic routing,integrating 10+ data and analysis tools, evaluation workflows, and response caching to reduce inference latency by 35%.",
          "Built optimized Python data pipelines for neuroscience text and brain image data, supporting domain adaptation and fine-tuning experiments across multiple model variants and delivering >99% reliable backend inference.",
          "Optimized Python-based data processing for large-scale tissue mapping and projection, improving throughput by 30% and enabling precise alignment of 1,000+ tissue blocks.",
          "Built reusable, production-quality data transformation modules following SDLC best practices, reducing preprocessing time by 25% and improving workflow transparency.",
          "Implemented multithreaded, memory-efficient pipelines with algorithmic and data structure optimizations, accelerating large-scale computations by 20%."
        ],
        tech: ["FastAPI", "RAG", "Python", "Data Pipelines", "AI Systems"],
      },
  {
    role: "Software Development Engineer Intern",
    company: "Amazon",
    period: "Jun 2025 – Aug 2025",
    description:
      "Worked on cloud-native, AI-powered automation and monitoring systems supporting large-scale operational workflows.",
    points: [
      "Designed distributed, cloud-native monitoring pipelines on AWS using Lambda, CloudWatch, CloudFormation,DynamoDB, SQS, and DLQ, centralizing order event tracking and alerting, boosting on-call efficiency by 35%.",
      "Implemented embedding-based vector retrieval over 100K+ operational records, enabling semantic search, similarity matching, and 30% faster incident resolution.",
      "Applied Dependency Injection and Registry design patterns to automate DLQ redrive operations, enhancing system extensibility by 65% and reducing MTTR by 40%.",
      "Developed production-grade user interfaces using TypeScript, JavaScript, and Vue.js, integrated with REST and GraphQL APIs, AWS IAM authentication, and robust data validation.",
      "Built CI/CD pipelines with automated unit, integration, and regression tests using JUnit and Mockito, ensuring reliable deployments and shortening release cycles by 25%."
    ],
    tech: ["AWS", "Amazon Q", "Bedrock", "Vector DB", "Cloud Native"],
  },
  {
    role: "Software Engineer",
    company: "Motorola Mobility",
    period: "Aug 2022 – Aug 2024",
    description:
      "Built AI-enabled Android and backend systems delivering performance-critical features to production users.",
    points: [
      "Built AI-driven Android mobile app features (Pay Attention, Remember This) leveraged Java, Kotlin, Android SDK, Jetpack Compose, and AOSP to deliver smooth experiences to 100K+ users with an 18% performance gain.",
      "Optimized mobile performance and memory usage with multithreaded data processing, backend integration, and Android-specific memory management, reducing latency by 20%.",
      "Leveraged Java, Kotlin, Android SDK, Jetpack Compose, and AOSP to deliver smooth experiences to 100K+ users with an 18% performance gain.",
      "Applied algorithmic and data structure optimizations across Android components including Activities, Services, Broadcast Receivers, and Content Providers, streamlining app workflows and improving responsiveness and reliability.",
      "Built custom Jetpack Compose and React Native UI components to deliver consistent cross-platform experiences, with unit/integration tests improving usability and maintainability by 15%.",
      "Coordinated feature delivery in Agile sprints, including design discussions, planning, and peer reviews, ensuring scalable production releases.",
      "Designed and integrated AI-powered decision logic into Android system workflows for the \“Care for Dependents\” device mode, earning 2nd place at Motorola India Hackathon 2023."
    ],
    tech: ["Android", "Machine Learning", "Backend", "Mobile AI"],
  },
];

// Simple Chevron SVG component
const ChevronRight = ({ className = "", size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title mb-12">Experience</h2>

      {/* Single column layout with wider cards */}
      <div className="space-y-8 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="
              bg-neutral-900/70 backdrop-blur
              border border-neutral-800
              rounded-2xl
              p-8
              hover:border-sky-400/40
              transition-all duration-300
              hover:shadow-xl hover:shadow-sky-400/5
              w-full
            "
          >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              {/* Left side - Role and Company */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-sky-400 font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">{exp.period}</span>
                </div>
              </div>

              {/* Right side - Tech stack pills */}
              <div className="flex flex-wrap gap-2 md:justify-end">
                {exp.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-sky-400/10
                      text-sky-400
                      border border-sky-400/20
                      text-sm font-medium
                      hover:bg-sky-400/20
                      transition-colors
                    "
                  >
                    {tech}
                  </span>
                ))}
                {exp.tech.length > 4 && (
                  <span
                    className="
                      px-4 py-2
                      rounded-full
                      bg-neutral-800
                      text-slate-400
                      border border-neutral-700
                      text-sm font-medium
                    "
                  >
                    +{exp.tech.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-6" />

            {/* Description */}
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {exp.description}
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-8">
              {exp.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + i * 0.1 }}
                  className="flex gap-3 group"
                >
                  <ChevronRight
                    className="
                      text-sky-400 mt-1 flex-shrink-0
                      group-hover:translate-x-1
                      transition-transform
                    "
                    size={20}
                  />
                  <span className="text-slate-400 group-hover:text-slate-300 transition-colors text-base">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            
          </motion.div>
        ))}
      </div>

      {/* Stats section (optional) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="
          max-w-6xl mx-auto mt-12
          grid grid-cols-2 md:grid-cols-4 gap-6
        "
      >
        {[
          { label: "Years Experience", value: "2+" },
          { label: "Projects Delivered", value: "15+" },
          { label: "Companies", value: "3" },
          { label: "Tech Stack", value: "20+" },
        ].map((stat, index) => (
          <div
            key={index}
            className="
              bg-neutral-900/50
              border border-neutral-800
              rounded-xl
              p-6
              text-center
              hover:border-sky-400/30
              transition-colors
            "
          >
            <div className="text-3xl font-bold text-sky-400 mb-2">
              {stat.value}
            </div>
            <div className="text-slate-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </motion.div>
      
    </section>
    
  );
}