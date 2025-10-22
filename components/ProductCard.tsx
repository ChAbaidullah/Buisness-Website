'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ProductCardProps {
  title: string
  description: string
  image: string
  category: string
  features: string[]
  href?: string
}

const ProductCard = ({ title, description, image, category, features, href = '#' }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="glass-card p-6 h-full flex flex-col group"
    >
      {/* Image */}
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-neon-blue/90 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4 flex-1">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2 text-sm text-gray-300"
            >
              <CheckCircle size={16} className="text-neon-blue flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href={href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary text-center flex items-center justify-center space-x-2 group/btn"
        >
          <span>Learn More</span>
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default ProductCard
