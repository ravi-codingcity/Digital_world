import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Web Developer & Graphics Designer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Data streams */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
            style={{
              left: `${10 + i * 12}%`,
              height: "100%",
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Main Title */}
            <div className="space-y-3">
              <motion.div
                className="text-sm font-mono text-cyan-400"
                variants={itemVariants}
              >
                console.log("Welcome to my digital world");
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: "Orbitron, monospace" }}
                variants={itemVariants}
              >
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent neon-text">
                  Ravi
                </span>
              </motion.h1>

              <motion.div
                className="text-2xl lg:text-3xl text-gray-300 font-light"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                variants={itemVariants}
              >
                {displayedText}
                <span className="animate-pulse text-cyan-400">|</span>
              </motion.div>
            </div>

            {/* Bio */}
            <motion.div
              className="relative bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 shadow-2xl"
              variants={itemVariants}
              whileHover={{
                borderColor: "rgba(0, 255, 255, 0.6)",
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)",
              }}
            >
              <div className="absolute top-3 left-3 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <div
                className="mt-6 space-y-4 text-gray-300"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                <p className="text-base leading-relaxed">
                  I'm a passionate Web Developer || Graphics Designer who transforms ideas into
                  digital reality. With expertise spanning{" "}
                  <span className="text-cyan-400">frontend innovation</span>,
                  <span className="text-purple-400"> backend architecture</span>,
                  and
                  <span className="text-pink-400"> graphics softwares</span>, I
                  craft solutions that push boundaries.
                </p>
                
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 border border-cyan-400/50 shadow-lg shadow-cyan-500/25 group"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </motion.a>

              <motion.a
                href="#projects"
                className="px-7 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {["React", "Node.js", "Illustrator", "Photoshop", "AWS", "Express.js"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-full text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Futuristic Avatar */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main avatar container */}
              <motion.div
                className="w-80 h-80 relative"
                animate={{
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Outer ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div
                  className="absolute inset-4 rounded-full border border-purple-500/30 animate-spin"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                ></div>

                {/* Avatar */}
                <div className="absolute inset-8 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/50">
                  <motion.div
                    className="text-8xl"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    👨‍💻
                  </motion.div>
                </div>

                {/* Floating elements */}
                {[
                  { icon: "⚡", position: "-top-4 -right-4", color: "yellow" },
                  { icon: "🚀", position: "-bottom-4 -left-4", color: "blue" },
                  { icon: "💎", position: "top-1/2 -left-8", color: "purple" },
                  { icon: "🔥", position: "top-1/2 -right-8", color: "red" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-${item.color}-500 flex items-center justify-center text-2xl shadow-lg`}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
