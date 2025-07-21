"use client"

import { motion } from "framer-motion"
import { Building2, Calendar, MapPin, Briefcase } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Associate Engineering",
      company: "GlobalFoundries",
      period: "May 2022 - March 2025",
      location: "Singapore",
      type: "Full-time",
      responsibilities: [
        "Managed the introduction of new products, ensuring successful tapeouts and technology transfer into production",
        "Involved in the critical stages of tapeouts for HighWIP (high work-in-progress) technology",
        "Monitored production wafers and ensured process optimization by analyzing data",
        "Performed daily fault detection checks on fabrication machines using software and SPC charts",
        "Contributed to the development and implementation of modern technology used in smart electronic devices",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Internship: Stock Management System",
      company: "Denselight Semiconductors",
      period: "Oct 2021 - March 2023",
      location: "Singapore",
      type: "Internship",
      responsibilities: [
        "Developed a system to track and record masks for production purposes, improving inventory accuracy and workflow efficiency",
      ],
      color: "from-blue-600 to-blue-700",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Professional <span className="text-black">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Building expertise through hands-on experience in semiconductor manufacturing and technology development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-600 hidden md:block"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-20 top-6 w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} hidden md:block`}
                ></div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-black mb-2">{experience.title}</h3>
                      <div className="flex items-center space-x-2 text-black font-semibold text-lg mb-2">
                        <Building2 className="w-5 h-5" />
                        <span>{experience.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 text-black">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{experience.type}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-4">Key Responsibilities:</h4>
                    <ul className="space-y-3">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + respIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`}
                          ></div>
                          <span className="text-black leading-relaxed">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
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
