import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "TechNova Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Led a team of 8 developers in architecting and deploying microservices-based applications. Implemented CI/CD pipelines reducing deployment time by 60%. Spearheaded migration to cloud-native architecture serving 1M+ users.",
      achievements: [
        "Increased system performance by 40% through optimization",
        "Mentored 5 junior developers and established coding standards",
        "Led successful migration of legacy systems to modern stack"
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "TypeScript", "Docker"],
      type: "Full-time",
      icon: "🚀"
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLab",
      location: "Remote",
      period: "2020 - 2022",
      description: "Developed and maintained 15+ client projects ranging from e-commerce platforms to SaaS applications. Collaborated with cross-functional teams to deliver pixel-perfect, responsive web applications.",
      achievements: [
        "Built 3 award-winning web applications",
        "Reduced page load times by 50% through optimization",
        "Implemented automated testing increasing code coverage to 95%"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker",],
      type: "Full-time",
      icon: "💻"
    },
    {
      title: "Frontend Developer",
      company: "PixelCraft Studios",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Specialized in creating interactive user interfaces and animations. Worked closely with UX designers to implement responsive designs that increased user engagement by 35%.",
      achievements: [
        "Developed component library used across 10+ projects",
        "Improved mobile performance by 45%",
        "Established frontend architecture standards"
      ],
      technologies: ["JavaScript", "React", "SASS", "Webpack"],
      type: "Full-time",
      icon: "🎨"
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub",
      location: "Austin, TX",
      period: "2018 - 2019",
      description: "Started my professional journey building responsive websites and learning modern development practices. Contributed to open-source projects and gained experience in agile development.",
      achievements: [
        "Delivered 20+ client websites on time",
        "Contributed to 5 open-source projects",
        "Achieved 98% client satisfaction rate"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      type: "Full-time",
      icon: "🌱"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/50 to-purple-900/30"></div>
      
      {/* Data streams */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              height: '100%',
            }}
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            My evolution as a developer through challenging roles and innovative projects
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="max-w-6xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black shadow-lg z-10">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </div>

              {/* Experience Card */}
              <motion.div
                className={`w-full md:w-5/12 ml-0 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                }`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-black/60 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 rounded-xl p-5 transition-all duration-300 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl mr-4 shadow-lg">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 font-semibold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <span className="mr-1">📅</span>
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1">📍</span>
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <span className="mr-2">🏆</span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <span className="mr-2">⚡</span>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-3 py-1 rounded-full text-sm transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Career Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { label: "Years Experience", value: "4+", icon: "⏰" },
            { label: "Companies", value: "4", icon: "🏢" },
            { label: "Projects Delivered", value: "100+", icon: "🚀" },
            { label: "Team Members Led", value: "5+", icon: "👥" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-cyan-400 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
