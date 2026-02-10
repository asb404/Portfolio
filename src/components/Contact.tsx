"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Icons } from "@/src/components/Icons"; 

const contactMethods = [
  {
    platform: "Email",
    value: "antarabhavsar44@gmail.com",
    href: "mailto:antarabhavsar44@gmail.com",
    icon:  <Icons.Email size={24} />,
    color: "from-rose-500/20 to-rose-600/20",
    borderColor: "border-rose-500/30",
    action: "Send Message",
  },
  {
    platform: "LinkedIn",
    value: "/in/antarabhavsar",
    href: "https://www.linkedin.com/in/antara-bhavsar-74b7a4187/",
    icon: <Icons.LinkedIn size={24} />,
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
    action: "Connect",
  },
  {
    platform: "GitHub",
    value: "/asb404",
    href: "https://github.com/asb404",
    icon: <Icons.GitHub size={24} />,
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30",
    action: "Follow",
  },
];

const availability = [
  { day: "Mon - Wed", time: "9:00 AM - 6:00 PM", status: "Available" },
  { day: "Weekends", time: "Flexible hours", status: "Available" },
  { day: "Response Time", time: "Within 24 hours", status: "Fast" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current!,
        "YOUR_PUBLIC_KEY"
      );
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Failed to send message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-slate-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info & Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Methods
                </h3>
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.platform}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className={`
                      flex items-center justify-between
                      p-6 rounded-2xl
                      border ${method.borderColor}
                      bg-gradient-to-br ${method.color}
                      hover:shadow-xl hover:shadow-${method.color.split('-')[1]}-500/10
                      transition-all duration-300
                      group
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <div className="
                        text-2xl p-3 rounded-xl
                        bg-white/10 backdrop-blur-sm
                        group-hover:scale-110
                        transition-transform duration-300
                      ">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {method.platform}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {method.value}
                        </p>
                      </div>
                    </div>
                    <span className="
                      text-sm font-medium px-4 py-2 rounded-full
                      bg-white/10 text-white/80
                      group-hover:bg-white/20 group-hover:text-white
                      transition-colors duration-300
                    ">
                      {method.action}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Availability
                </h3>
                <div className="space-y-4">
                  {availability.map((slot, index) => (
                    <motion.div
                      key={slot.day}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="
                        flex items-center justify-between
                        p-4 rounded-xl
                        bg-neutral-900/50 border border-neutral-800
                        hover:border-sky-500/30
                        transition-colors duration-300
                      "
                    >
                      <div>
                        <p className="font-medium text-white">{slot.day}</p>
                        <p className="text-sm text-slate-400">{slot.time}</p>
                      </div>
                      <span className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${slot.status === "Available" 
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }
                      `}>
                        {slot.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="
                  p-6 rounded-2xl
                  bg-gradient-to-br from-sky-500/10 to-cyan-500/10
                  border border-sky-500/20
                  mt-8
                "
              >
                <div className="flex items-center gap-4">
                  <div className="
                    w-12 h-12 rounded-full
                    bg-gradient-to-br from-sky-500 to-cyan-400
                    flex items-center justify-center
                    text-xl
                  ">
                    ⚡
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Quick Response Guaranteed
                    </h4>
                    <p className="text-slate-400 text-sm mt-1">
                      I typically respond within a few hours during business days
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="
              p-8 rounded-2xl
              bg-neutral-900/70 backdrop-blur
              border border-neutral-800
              shadow-xl shadow-black/20
            ">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send me a message
              </h3>
              <p className="text-slate-400 mb-8">
                Fill out the form below and I&apos;ll get back to you as soon as possible
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="
                        w-full px-4 py-3 rounded-xl
                        bg-neutral-800/50 border border-neutral-700
                        text-white placeholder-slate-500
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30
                        transition-all duration-300
                      "
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="
                        w-full px-4 py-3 rounded-xl
                        bg-neutral-800/50 border border-neutral-700
                        text-white placeholder-slate-500
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30
                        transition-all duration-300
                      "
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-neutral-800/50 border border-neutral-700
                      text-white placeholder-slate-500
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30
                      transition-all duration-300
                    "
                    placeholder="Project Inquiry / Opportunity"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-neutral-800/50 border border-neutral-700
                      text-white placeholder-slate-500
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30
                      transition-all duration-300
                      resize-none
                    "
                    placeholder="Tell me about your project, timeline, and requirements..."
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      p-4 rounded-xl
                      bg-green-500/10 border border-green-500/30
                      text-green-400
                    "
                  >
                    ✅ Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      p-4 rounded-xl
                      bg-red-500/10 border border-red-500/30
                      text-red-400
                    "
                  >
                    ❌ Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    w-full py-4 rounded-xl
                    bg-gradient-to-r from-sky-500 to-cyan-400
                    text-black font-bold text-lg
                    hover:shadow-xl hover:shadow-sky-500/30
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-300
                    flex items-center justify-center gap-3
                  "
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>🚀</span>
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-sky-400 hover:text-sky-300">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800"
            >
              <h4 className="font-semibold text-white mb-3">
                What happens next?
              </h4>
              <ol className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold">1.</span>
                  <span>I review your message and respond within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold">2.</span>
                  <span>We schedule a call to discuss details and requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold">3.</span>
                  <span>I provide a proposal with timeline and cost estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky-400 font-bold">4.</span>
                  <span>We kick off the project with clear communication</span>
                </li>
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}