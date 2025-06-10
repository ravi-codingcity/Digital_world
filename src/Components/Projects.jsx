import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FreightproImg from "../assets/freightpro.jpeg";
import OmTransImg from "../assets/omtransimg.jpg";
import TheexamguruImg from "../assets/theexamguruimg.jpg";
import LibertyMaskImg from "../assets/libertymasksnyimg.jpg";
import KesarVillasImg from "../assets/kesarvilasimg.jpg";
import TechtraDigitalImg from "../assets/techtradigitalimg.jpg";
import C6WorldImg from "../assets/c6worldimg.jpg";
import SalesDashboardImg from "../assets/salesimg.jpg";
import SocialMediaImg from "../assets/socialmedia_img.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    // Coding Projects
    {
      id: 1,
      title: "Freight Pro Online Application",
      description:
        "FreightPro, a fully responsive SAAS application built on the MERN stack – from frontend to backend, database setup, and API integration",
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/yourusername/freight-pro",
      live: "https://freightpro.in",
      image: (
        <img
          src={FreightproImg}
          alt="Freight Pro"
          className="w-full h-full object-cover"
        />
      ),
      category: "coding",
      type: "MERN Stack",
      featured: true,
      stats: { users: "100+", performance: "99.9%", rating: "4.9/5" },
    },
    {
      id: 2,
      title: "OmTrans MERN Site",
      description:
        "OmTrans website built with the MERN stack — fully responsive, SEO-optimized, and integrated with a site visitor counter.",
      technologies: ["React.js", "Node.js", "Mongoose", "Express", "Tailwind CSS"],
      github: "https://github.com/ravi-codingcity/new-omtrans",
      live: "https://www.omtrans.in/",
      image: (
        <img
          src={OmTransImg}
          alt="OmTrans"
          className="w-full h-full object-cover"
        />
      ),
      category: "coding",
      type: "MERN Stack",
      stats: { users: "2K+", performance: "98.5%", rating: "4.8/5" },
    },
    {
      id: 3,
      title: "Sales Dashboard",
      description:
        "Responsive Sales Admin Panel to manage records and CRUD operations with one-click PDF export for reports. This is in Under Development.",
      technologies: [
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      github: "https://github.com/ravi-codingcity/sales_dashboard",
      live: "https://sales-dashboard-rho-green.vercel.app/",
      image: (
        <img
          src={SalesDashboardImg}
          alt="Sales Dashboard"
          className="w-full h-full object-cover"
        />
      ),
      category: "coding",
      type: "MERN Stack",
      stats: { users: "100+", performance: "96.9%", rating: "4.8/5"  },
    },
    {
      id: 4,
      title: "OmTrax MERN Site",
      description:
        "OmTrax website is currently under development using the MERN stack — fully responsive, SEO-optimized, and integrated with a site visitor counter.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/ravi-codingcity/Freight_Pro",
      live: "https://defi-platform-demo.com",
      image: "⛓️",
      category: "coding",
      type: "MERN Stack",
      stats: {  users: "1K+", performance: "96.9%", rating: "4.8/5" },
    },
    {
      id: 5,
      title: "The Exam Guru",
      description:
        " The Exam Guru website is designed to capture leads and support business growth through online inquiries.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/ravi-codingcity/The_Exam_Guru",
      live: "https://www.theexamguru.com/",
      image: (
        <img
          src={TheexamguruImg}
          alt="The Exam Guru"
          className="w-full h-full object-cover"
        />
      ),
      category: "coding",
      type: "Website",
      stats: {  users: "5K+", performance: "96.9%", rating: "4.8/5" },
    },
    {
      id: 6,
      title: "Liberty Mask New York (USA)",
      description:
        "Liberty Mask is US based company and this specializes in bulk mask sales across the USA, offering a wide variety of mask types.",
      technologies: ["Wordpress", "Shopify", "HTML", "CSS", "JavaScript", "Elementor" , "Woocommerce"],
      github: "https://github.com/ravi-codingcity/liberty-masks-ny",
      live: "https://libertymasksny.com/",
      image: (
        <img
          src={LibertyMaskImg}
          alt="Liberty Mask"
          className="w-full h-full object-cover"
        />
      ),
      category: "coding",
      type: "Website",
      stats: { users: "5K+", performance: "96.9%", rating: "4.8/5" },
    },

     {
      id: 6,
      title: "Kesar Villas (Dubai)",
      description:
        "Kesar Vilas is a saffron export company that cultivates saffron in the Kashmir Valley and exports it to Dubai and other international markets.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      github: "https://github.com/ravi-codingcity/Kesar_Vilas",
      live: "https://kesarvilas.com/",
      image: (
        <img
          src={KesarVillasImg}
          alt="Kesar Villas"
          className="w-full h-full object-cover"
        />
      ),
      category: "coding",
      type: "Website",
      stats: { users: "3K+", performance: "95.9%", rating: "4.7/5" },
    },

         {
      id: 6,
      title: "Techtra Digital",
      description:
        "Its a digital marketing agency offering a range of online marketing services. I developed this website and enhanced its overall performance.",
      technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "Elementor"],
      github: "https://github.com/ravi-codingcity/techtra_digital",
      live: "https://techtradigital.com/",
      image: (
        <img
          src={TechtraDigitalImg}
          alt="Techtra Digital"
          className="w-full h-full object-cover"
        />
      ),
      category: "coding",
      type: "Website",
      stats: { users: "5K+", performance: "98.9%", rating: "4.9/5"  },
    },
         {
      id: 6,
      title: "C 6 World",
      description:
        "C6 World is an NGO dedicated to raising awareness about climate change and promoting healthy, sustainable lifestyles through education",
      technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "Elementor"],
      github: "https://github.com/ravi-codingcity/c6world",
      live: "https://c6world.org/",
      image: (
        <img
          src={C6WorldImg}
          alt="C 6 World"
          className="w-full h-full object-cover"
        />
      ),
      category: "coding",
      type: "Website",
      stats: { users: "8K+", performance: "97.9%", rating: "4.8/5"  },
    },

    // Graphics Design Projects
    {
      id: 7,
      title: "Digital Branding",
      description:
        "I specialize in graphic design, digital branding, social media creatives, video editing, and enhancing a company's digital presence.",
      technologies: [
        "Illustrator",
        "Photoshop",
        "Illustrator",
        "Premiere Pro",
        "After Effects",
      ],
      behance: "https://behance.net/yourusername/cyberpunk-brand",
      dribbble: "https://dribbble.com/shots/cyberpunk-brand",
      image:    <img
          src={SocialMediaImg}
          alt="The Exam Guru"
          className="w-full h-full object-cover"
        />,
      featured: true,
      category: "design",
      type: "Branding",
      client: "TechNova Inc.",
      stats: { views: "15K+", likes: "2.3K", awards: "3" },
    },
    {
      id: 8,
      title: "Mobile App UI/UX Design",
      description:
        "Complete mobile application design with user research, wireframing, prototyping, and final UI implementation.",
      technologies: ["Figma", "Adobe XD", "Principle", "Sketch"],
      behance: "https://behance.net/yourusername/mobile-app-ui",
      dribbble: "https://dribbble.com/shots/mobile-app-ui",
      image: "📱",
      category: "design",
      type: "UI/UX",
      client: "FinTech Solutions",
      stats: { screens: "50+", interactions: "200+", downloads: "25K+" },
    },
    {
      id: 9,
      title: "3D Product Visualization",
      description:
        "Photorealistic 3D product renders and animations for e-commerce and marketing campaigns.",
      technologies: ["Blender", "Cinema 4D", "KeyShot", "Photoshop"],
      behance: "https://behance.net/yourusername/3d-products",
      dribbble: "https://dribbble.com/shots/3d-products",
      image: "🎯",
      category: "design",
      type: "3D Design",
      client: "Luxury Brands Co.",
      stats: { renders: "100+", ctr: "+45%", engagement: "+60%" },
    },
    {
      id: 10,
      title: "Motion Graphics Portfolio",
      description:
        "Dynamic motion graphics and animations for social media campaigns, explainer videos, and digital advertising.",
      technologies: ["After Effects", "Cinema 4D", "Premiere Pro", "Lottie"],
      behance: "https://behance.net/yourusername/motion-graphics",
      youtube: "https://youtube.com/playlist/motion-graphics",
      image: "🎬",
      category: "design",
      type: "Animation",
      client: "Digital Agency",
      stats: { views: "500K+", engagement: "+80%", campaigns: "25+" },
    },
  ];

  const categories = [
    { key: "all", label: "All Projects", icon: "🚀" },
    { key: "coding", label: "Development", icon: "💻" },
    { key: "design", label: "Design", icon: "🎨" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

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
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h2>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Take a look at some of my recent projects
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category.key
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-black/40 border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
                style={{ fontFamily: "Rajdhani, sans-serif" }}
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
                        <div className="text-sm font-semibold mb-2">
                          {project.type}
                        </div>
                        {project.client && (
                          <div className="text-xs text-cyan-400">
                            Client: {project.client}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Title and Description */}
                    <h3
                      className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300"
                      style={{ fontFamily: "Orbitron, monospace" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-4 leading-relaxed"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
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
                        {Object.entries(project.stats).map(
                          ([key, value], index) => (
                            <div
                              key={index}
                              className="bg-gray-800/50 rounded p-2"
                            >
                              <div className="text-cyan-400 font-bold text-sm">
                                {value}
                              </div>
                              <div className="text-gray-400 text-xs capitalize">
                                {key}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.category === "coding" ? (
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
                            <span className="mr-2">
                              {project.youtube ? "📺" : "🏀"}
                            </span>
                            {project.youtube ? "YouTube" : "Dribbble"}
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
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              Ready to collaborate?
            </h3>
            <p
              className="text-gray-300 mb-6"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Let's bring your next project to life with cutting-edge
              development and stunning design
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
  );
};

export default Projects;
