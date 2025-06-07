import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../Components/Header.jsx'
import About from '../components/About.jsx'
import Experience from '../components/Experience.jsx'
import Technologies from '../components/Technologies.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
        {/* Cyberpunk Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'cyber-grid 3s ease-in-out infinite alternate'
            }}
          />
          
          {/* Neon particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: ['#00ffff', '#ff00ff', '#00ff00', '#ffff00'][i % 4],
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
        
        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Cyberpunk Terminal Loading */}
          <div className="bg-black/90 border border-cyan-400 rounded-lg p-8 backdrop-blur-sm shadow-2xl shadow-cyan-500/25">
            <div className="text-cyan-400 mb-6 font-mono text-lg">
              <span className="text-pink-400">dev</span>
              <span className="text-white">@</span>
              <span className="text-cyan-400">ravi_chaudhary</span>
              <span className="text-white">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">$ </span>
              <span className="text-green-400">./initialize_system.sh</span>
            </div>
            
            {/* Advanced Loading Animation */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-cyan-400 mr-3">▶</span>
                <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </div>
                <span className="text-green-400 ml-3 font-mono">100%</span>
              </div>
              
              <div className="text-left space-y-1 text-sm font-mono">
                <motion.div 
                  className="text-cyan-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  ✓ Loading neural networks...
                </motion.div>
                <motion.div 
                  className="text-purple-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  ✓ Initializing quantum processors...
                </motion.div>
                <motion.div 
                  className="text-pink-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  ✓ Establishing secure connection...
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="text-green-400 mt-4 font-mono"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              PORTFOLIO READY █
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Cyberpunk Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900"></div>
        
        {/* Animated Cyber Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(45deg, rgba(255, 0, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px, 50px 50px, 100px 100px',
              animation: 'cyber-grid 10s linear infinite'
            }}
          />
        </div>

        {/* Floating Neon Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <div 
                className="w-2 h-2 rounded-full blur-sm"
                style={{
                  background: ['#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff0080'][i % 5],
                  boxShadow: `0 0 10px ${['#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff0080'][i % 5]}`,
                }}
              />
            </motion.div>
          ))}
        </div>DEV.PORTFOLIO
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <About />
          <Experience />
          <Technologies />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Cyberpunk Scroll Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white p-4 rounded-lg border border-cyan-400 shadow-lg z-50 group overflow-hidden"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ 
          scale: 1.1,
          y: -5,
          boxShadow: "0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)",
          borderColor: "rgba(0, 255, 255, 0.8)"
        }}
        whileTap={{ 
          scale: 0.95,
          y: 0
        }}
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: 1, 
          duration: 0.6,
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        style={{
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Icon */}
        <motion.svg 
          className="w-6 h-6 relative z-10" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ 
            y: -2,
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 0.4,
            ease: "easeInOut"
          }}
        >
          <path d="M7 14l5-5 5 5z"/>
        </motion.svg>
        
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-lg border border-cyan-400"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>

      {/* Enhanced Animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        @keyframes cyber-grid {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-25px, -25px) rotate(1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes neon-pulse {
          0%, 100% { 
            text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
          }
          50% { 
            text-shadow: 0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor;
          }
        }
        
        @keyframes data-stream {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        .neon-text {
          animation: neon-pulse 2s ease-in-out infinite alternate;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #00cccc, #cc00cc);
        }
        
        /* Selection */
        ::selection {
          background: rgba(0, 255, 255, 0.3);
          color: #fff;
        }
      `}</style>
    </motion.div>
  )
}

export default Portfolio