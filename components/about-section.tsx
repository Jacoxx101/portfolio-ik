"use client"

import { motion } from "framer-motion"
import { Cpu, Code, Database, TrendingUp } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    {
      icon: <Cpu className="w-8 h-8 text-black" />,
      title: "Semiconductor Expertise",
      description: "3 years in NPI, tapeouts, and production monitoring",
    },
    {
      icon: <Code className="w-8 h-8 text-black" />,
      title: "IT Transition",
      description: "Pursuing Bachelor's in AI and Autonomous Systems",
    },
    {
      icon: <Database className="w-8 h-8 text-black" />,
      title: "Data Analysis",
      description: "Strong analytical skills and problem-solving abilities",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-black" />,
      title: "Innovation Focus",
      description: "Building expertise in AI, automation, and software development",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About <span className="text-black">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 shadow-lg mb-12"
          >
            <p className="text-lg md:text-xl text-black leading-relaxed text-center">
              With <span className="font-semibold text-black">3 years of technical experience</span> in the
              semiconductor industry, specializing in NPI, tapeouts, and production monitoring, I am transitioning into
              the IT sector. I am pursuing a
              <span className="font-semibold text-black"> Bachelor's in IT with a focus on AI and automation</span>,
              building expertise in programming, data management, and software development. My strong analytical skills
              and problem-solving abilities from semiconductor manufacturing, combined with my growing IT knowledge,
              position me well for roles in technology-driven fields where{" "}
              <span className="font-semibold text-black">innovation and efficiency are key</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">{highlight.title}</h3>
                    <p className="text-black">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
