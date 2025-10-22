'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Products', href: '/products' },
      { name: 'Quality Standards', href: '/quality' },
      { name: 'Contact', href: '/contact' },
    ],
    products: [
      { name: 'Pharmaceutical Grade', href: '/products#pharmaceutical' },
      { name: 'Food Grade', href: '/products#food' },
      { name: 'Cosmetic Grade', href: '/products#cosmetic' },
      { name: 'Technical Grade', href: '/products#technical' },
    ],
    certifications: [
      { name: 'ISO 9001:2015', href: '/quality#iso' },
      { name: 'Halal Certified', href: '/quality#halal' },
      { name: 'FDA Approved', href: '/quality#fda' },
      { name: 'Kosher Certified', href: '/quality#kosher' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/halalgelatin', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/sadiqgelatin', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/sadiq-gelatin-industries/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/sadiqgelatin/', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gradient-to-t from-charcoal to-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold neon-text mb-4">Sadiq Gelatin Industries</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Refining quality gelatin since 1980. Leading manufacturer of premium gelatin 
                products with global reach and uncompromising quality standards.
              </p>
            </motion.div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} className="text-neon-blue" />
                <span className="text-sm">10.5 KM Grand Trunk Rd, Feroz Wala, Shahdara, 54000</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-neon-blue" />
                <span className="text-sm">0325 5556404</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-neon-blue" />
                <span className="text-sm">sales@sadiqgelatin.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-white mb-4"
            >
              Company
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-white mb-4"
            >
              Products
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Certifications Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-white mb-4"
            >
              Certifications
            </motion.h4>
            <ul className="space-y-2">
              {footerLinks.certifications.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2, color: '#00d4ff' }}
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Border */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Sadiq Gelatin Industries. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neon-blue transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
