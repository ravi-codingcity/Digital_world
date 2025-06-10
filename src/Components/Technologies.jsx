import React from "react";
import { motion } from "framer-motion";

const Technologies = () => {
  const technologies = [
    // Frontend Technologies
    {
      name: "React",
      icon: "⚛️",
      color: "from-blue-400 to-blue-600",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: "🔺",
      color: "from-black to-gray-800",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      color: "from-yellow-400 to-yellow-600",
      category: "Frontend",
    },
    {
      name: "HTML5",
      icon: "🟧",
      color: "from-orange-500 to-red-500",
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: "🎨",
      color: "from-blue-400 to-blue-600",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "🌊",
      color: "from-cyan-400 to-teal-500",
      category: "Frontend",
    },

    // Backend Technologies
    {
      name: "Node.js",
      icon: "🟢",
      color: "from-green-500 to-green-700",
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: "⚡",
      color: "from-gray-400 to-gray-600",
      category: "Backend",
    },

    // Database Technologies
    {
      name: "MongoDB",
      icon: "🍃",
      color: "from-green-500 to-green-700",
      category: "Database",
    },
    {
      name: "Redis",
      icon: "🔴",
      color: "from-red-500 to-red-700",
      category: "Database",
    },
  

    // DevOps & Tools
    {
      name: "Docker",
      icon: "🐳",
      color: "from-blue-400 to-blue-600",
      category: "DevOps",
    },
    {
      name: "AWS",
      icon: "☁️",
      color: "from-orange-400 to-orange-600",
      category: "DevOps",
    },
    {
      name: "Git",
      icon: "📝",
      color: "from-orange-500 to-red-500",
      category: "DevOps",
    },
    {
      name: "GitHub",
      icon: "🐙",
      color: "from-gray-700 to-black",
      category: "DevOps",
    },
    {
      name: "Linux",
      icon: "🐧",
      color: "from-yellow-400 to-black",
      category: "DevOps",
    },

    // Graphics Softwares
    {
      name: "Photoshop",
      icon: "🎨",
      color: "from-red-500 to-red-700",
      category: "Graphics",
    },
    {
      name: "Illustrator",
      icon: "🖌️",
      color: "from-blue-500 to-blue-700",
      category: "Graphics",
    },
    {
      name: "Premiere Pro",
      icon: "📹",
      color: "from-purple-500 to-purple-700",
      category: "Graphics",
    },
    {
      name: "After Effects",
      icon: "🎥",
      color: "from-yellow-500 to-yellow-700",
      category: "Graphics",
    },
    {
      name: "Canva",
      icon: "🖼️",
      color: "from-green-500 to-green-700",
      category: "Graphics",
    },
    {
      name: "CorelDRAW",
      icon: "🖍️",
      color: "from-blue-500 to-blue-700",
      category: "Graphics",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #00ffff 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #ff00ff 2px, transparent 2px)
              `,
              backgroundSize: "100px 100px, 100px 100px",
              backgroundPosition: "0 0, 50px 50px",
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
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
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technologies I Use
            </span>
          </motion.h2>
          <motion.p
            className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A comprehensive arsenal of modern tools and frameworks that power my
            development workflow
          </motion.p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Tech Card */}
              <div className="relative bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 text-center hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                {/* Tech Icon */}
                <div className="relative mb-3">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center text-2xl md:text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {tech.icon}
                  </div>

                  {/* Glow effect on hover */}
                  <div
                    className={`absolute inset-0 w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br ${tech.color} rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}
                  ></div>
                </div>

                {/* Tech Name */}
                <h3
                  className="text-sm md:text-base font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {tech.name}
                </h3>

                {/* Category Badge */}
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs px-2 py-1 bg-gray-800/80 text-gray-400 rounded-full">
                    {tech.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                ></div>
              </div>

              {/* Floating indicator */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            {
              label: "Technologies",
              value: `${technologies.length}+`,
              icon: "⚡",
            },
            { label: "Years Experience", value: "4+", icon: "⏰" },
            { label: "Projects Built", value: "60+", icon: "🚀" },
            { label: "Lines of Code", value: "100K+", icon: "💻" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1"
                style={{ fontFamily: "Orbitron, monospace" }}
              >
                {stat.value}
              </div>
              <div
                className="text-gray-400 text-sm"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
