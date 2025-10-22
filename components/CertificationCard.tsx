'use client'

import { motion } from 'framer-motion'
import { Award, Shield, CheckCircle, Globe } from 'lucide-react'

interface CertificationCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  year?: string
  status?: string
}

const CertificationCard = ({ title, description, icon: Icon, year, status = 'Active' }: CertificationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="glass-panel p-8 text-center group hover:animate-glow-slow"
    >
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mb-6"
      >
        <div className="p-4 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 border border-neon-blue/30">
          <Icon size={48} className="text-neon-blue group-hover:text-neon-cyan transition-colors" />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 mb-4 leading-relaxed"
      >
        {description}
      </motion.p>

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center space-x-2"
      >
        <CheckCircle size={16} className="text-green-400" />
        <span className="text-sm text-green-400 font-medium">{status}</span>
        {year && (
          <>
            <span className="text-gray-500">•</span>
            <span className="text-sm text-gray-400">{year}</span>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export default CertificationCard
