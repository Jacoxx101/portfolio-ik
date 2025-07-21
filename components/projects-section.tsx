"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Code, Database, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Stock Management System",
      description:
        "Developed a comprehensive system to track and record masks for production purposes at Denselight Semiconductors, improving inventory accuracy and workflow efficiency by 40%.",
      image: "/placeholder.svg?height=300&width=500&text=Stock+Management+System",
      tags: ["Python", "SQL", "Database Management", "Inventory Control"],
      date: "Oct 2021 - Mar 2023",
      type: "Professional Project",
      color: "from-blue-500 to-blue-600",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Production Monitoring Dashboard",
      description:
        "Created an automated monitoring system for semiconductor production wafers with real-time data analysis, fault detection, and SPC chart integration for process optimization.",
      image: "/placeholder.svg?height=300&width=500&text=Production+Dashboard",
      tags: ["Tableau", "Power BI", "SPC Charts", "Process Control"],
      date: "May 2022 - Present",
      type: "Industry Solution",
      color: "from-purple-500 to-purple-600",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "AI-Driven Yield Analysis",
      description:
        "Implementing machine learning algorithms to analyze semiconductor yield patterns and predict potential manufacturing issues, contributing to improved production efficiency.",
      image: "/placeholder.svg?height=300&width=500&text=AI+Yield+Analysis",
      tags: ["Machine Learning", "Python", "Yield Analysis", "FastAPI"],
      date: "2024 - Present",
      type: "Research Project",
      color: "from-green-500 to-green-600",
      icon: <Brain className="w-6 h-6" />,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Featured <span className="text-black">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Showcasing key projects that demonstrate my technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-medium flex items-center space-x-2`}
                >
                  {project.icon}
                  <span>{project.type}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-black mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.date}</span>
                </div>

                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-black mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-black border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 text-black hover:bg-gray-100 bg-transparent"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
