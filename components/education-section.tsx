"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      degree: "Degree in AI and Autonomous Systems",
      institution: "Murdoch University, Singapore",
      period: "March 2024 - Present",
      status: "In Progress",
      color: "from-blue-500 to-blue-600",
      icon: "🤖",
    },
    {
      degree: "Diploma in Electronics and Electrical Engineering",
      institution: "Republic Polytechnic, Singapore",
      period: "April 2019 - April 2022",
      status: "Completed",
      color: "from-blue-600 to-blue-700",
      icon: "⚡",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            <span className="text-black">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Continuous learning journey from electronics engineering to cutting-edge AI and autonomous systems
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className="text-8xl">{edu.icon}</div>
                </div>

                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${edu.color} text-white mb-6`}>
                  <GraduationCap className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-black mb-4 leading-tight">{edu.degree}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-black">
                    <BookOpen className="w-5 h-5 text-black" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-black">
                    <Calendar className="w-5 h-5 text-black" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-black">
                    <MapPin className="w-5 h-5 text-black" />
                    <span>Singapore</span>
                  </div>
                </div>

                <div
                  className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${
                    edu.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                  }`}
                >
                  {edu.status}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold text-black mb-4">Academic Focus</h3>
            <p className="text-lg text-black leading-relaxed">
              My educational journey reflects a strategic transition from traditional electronics engineering to
              cutting-edge AI and autonomous systems, building a strong foundation for innovation in technology-driven
              fields.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
