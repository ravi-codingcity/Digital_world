import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: '🔗', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourusername' },
    { name: 'Email', icon: '📧', url: 'mailto:your.email@example.com' }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
