import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    // Coding Projects
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      description: "A next-generation e-commerce solution with AI recommendations, real-time analytics, and seamless payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TensorFlow", "AWS"],
      github: "https://github.com/yourusername/ai-ecommerce",
      live: "https://ai-ecommerce-demo.com",
      image: "🛒",
      category: "coding",
      type: "Full Stack",
      featured: true,
      stats: { users: "10K+", performance: "99.9%", rating: "4.9/5" }
    },
    {
      id: 2,
      title: "Real-Time Collaboration Suite",
      description: "A comprehensive workspace with video calls, document editing, project management, and team chat functionality.",
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL", "WebRTC"],
      github: "https://github.com/yourusername/collab-suite",
      live: "https://collab-suite-demo.com",
      image: "🤝",
      category: "coding",
      type: "Full Stack",
      stats: { users: "5K+", performance: "98.5%", rating: "4.8/5" }
    },
    {
      id: 3,
      title: "Cybersecurity Dashboard",
      description: "Advanced threat detection system with real-time monitoring, vulnerability scanning, and incident response automation.",
      technologies: ["Python", "React", "Docker", "Elasticsearch", "Machine Learning"],
      github: "https://github.com/yourusername/cyber-dashboard",
      live: "https://cyber-dashboard-demo.com",
      image: "🛡️",
      category: "coding",
      type: "Full Stack",
      stats: { threats: "99.2%", uptime: "99.8%", response: "<1min" }
    },
    {
      id: 4,
      title: "Blockchain DeFi Platform",
      description: "Decentralized finance platform for lending, borrowing, and yield farming with smart contract integration.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      github: "https://github.com/yourusername/defi-platform",
      live: "https://defi-platform-demo.com",
      image: "⛓️",
      category: "coding",
      type: "Web3",
      stats: { volume: "$2M+", users: "3K+", apy: "12%" }
    },
    
    // Graphics Design Projects
    {
      id: 5,
      title: "Cyberpunk Brand Identity",
      description: "Complete brand identity design for a tech startup including logo, color palette, typography, and brand guidelines.",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma", "After Effects"],
      behance: "https://behance.net/yourusername/cyberpunk-brand",
      dribbble: "https://dribbble.com/shots/cyberpunk-brand",
      image: "🎨",
      category: "design",
      type: "Branding",
      client: "TechNova Inc.",
      stats: { views: "15K+", likes: "2.3K", awards: "3" }
    },
    {
      id: 6,
      title: "Mobile App UI/UX Design",
      description: "Complete mobile application design with user research, wireframing, prototyping, and final UI implementation.",
      technologies: ["Figma", "Adobe XD", "Principle", "Sketch"],
      behance: "https://behance.net/yourusername/mobile-app-ui",
      dribbble: "https://dribbble.com/shots/mobile-app-ui",
      image: "📱",
      category: "design",
      type: "UI/UX",
      client: "FinTech Solutions",
      stats: { screens: "50+", interactions: "200+", downloads: "25K+" }
    },
    {
      id: 7,
      title: "3D Product Visualization",
      description: "Photorealistic 3D product renders and animations for e-commerce and marketing campaigns.",
      technologies: ["Blender", "Cinema 4D", "KeyShot", "Photoshop"],
      behance: "https://behance.net/yourusername/3d-products",
      dribbble: "https://dribbble.com/shots/3d-products",
      image: "🎯",
      category: "design",
      type: "3D Design",
      client: "Luxury Brands Co.",
      stats: { renders: "100+", ctr: "+45%", engagement: "+60%" }
    },
    {
      id: 8,
      title: "Motion Graphics Portfolio",
      description: "Dynamic motion graphics and animations for social media campaigns, explainer videos, and digital advertising.",
      technologies: ["After Effects", "Cinema 4D", "Premiere Pro", "Lottie"],
      behance: "https://behance.net/yourusername/motion-graphics",
      youtube: "https://youtube.com/playlist/motion-graphics",
      image: "🎬",
      category: "design",
      type: "Animation",
      client: "Digital Agency",
      stats: { views: "500K+", engagement: "+80%", campaigns: "25+" }
    }
  ]

  const categories = [
    { key: 'all', label: 'All Projects', icon: '🚀' },
    { key: 'coding', label: 'Development', icon: '💻' },
    { key: 'design', label: 'Design', icon: '🎨' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/60 to-purple-900/40"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
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
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            Featured <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Portfolio</span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            A showcase of my technical expertise and creative vision across development and design
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category.key
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-black/40 border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                }`}
                style={{ fontFamily: 'Rajdhani, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2 text-xl">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Card */}
                <div className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    </div>
                  )}

                  {/* Project Image/Icon */}
                  <div className="h-48 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center text-6xl relative overflow-hidden">
                    <motion.div
                      className="text-8xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image}
                    </motion.div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-sm font-semibold mb-2">{project.type}</div>
                        {project.client && (
                          <div className="text-xs text-cyan-400">Client: {project.client}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300" style={{ fontFamily: 'Orbitron, monospace' }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {project.description}
                    </p>

                    {/* Technologies/Tools */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 px-3 py-1 rounded-full text-xs transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mb-4">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(project.stats).map(([key, value], index) => (
                          <div key={index} className="bg-gray-800/50 rounded p-2">
                            <div className="text-cyan-400 font-bold text-sm">{value}</div>
                            <div className="text-gray-400 text-xs capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.category === 'coding' ? (
                        <>
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-center py-2 rounded-lg transition-all duration-300 flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="mr-2">📝</span>
                            Code
                          </motion.a>
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-center py-2 rounded-lg transition-all duration-300 flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="mr-2">🚀</span>
                            Live Demo
                          </motion.a>
                        </>
                      ) : (
                        <>
                          <motion.a
                            href={project.behance}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-center py-2 rounded-lg transition-all duration-300 flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="mr-2">🎨</span>
                            Behance
                          </motion.a>
                          <motion.a
                            href={project.dribbble || project.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-400 hover:to-red-500 text-white text-center py-2 rounded-lg transition-all duration-300 flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="mr-2">{project.youtube ? '📺' : '🏀'}</span>
                            {project.youtube ? 'YouTube' : 'Dribbble'}
                          </motion.a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
              Ready to collaborate?
            </h3>
            <p className="text-gray-300 mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Let's bring your next project to life with cutting-edge development and stunning design
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">💬</span>
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
