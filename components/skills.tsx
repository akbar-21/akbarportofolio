"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, PenTool, Database, Monitor, Video, FileText, Wrench, Laptop } from "lucide-react"

const skills = [
  {
    name: "Microsoft Office",
    icon: <FileText className="h-6 w-6" />,
    level: 90,
  },
  {
    name: "PC & Laptop Troubleshooting",
    icon: <Wrench className="h-6 w-6" />,
    level: 85,
  },
  {
    name: "Video Editing",
    icon: <Video className="h-6 w-6" />,
    level: 80,
  },
  {
    name: "Computer Maintenance",
    icon: <Laptop className="h-6 w-6" />,
    level: 85,
  },
  {
    name: "Graphic Design",
    icon: <PenTool className="h-6 w-6" />,
    level: 85,
  },
  {
    name: "Basic Programming",
    icon: <Code className="h-6 w-6" />,
    level: 75,
  },
  {
    name: "Database Management",
    icon: <Database className="h-6 w-6" />,
    level: 70,
  },
  {
    name: "Information Technology",
    icon: <Monitor className="h-6 w-6" />,
    level: 80,
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full">{skill.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="bg-gray-900 dark:bg-gray-300 h-2.5 rounded-full"
                  ></motion.div>
                </div>
                <div className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
