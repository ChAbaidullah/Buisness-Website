'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Target, Eye, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  const timeline = [
    {
      year: '1980',
      title: 'Foundation',
      description: 'Sadiq Gelatin Industries was established with a vision to provide high-quality gelatin products to the pharmaceutical industry.',
      icon: Calendar,
    },
    {
      year: '1995',
      title: 'Expansion',
      description: 'Expanded operations to serve food and cosmetic industries, establishing ourselves as a multi-sector gelatin manufacturer.',
      icon: Globe,
    },
    {
      year: '2005',
      title: 'Certification',
      description: 'Achieved ISO 9001:2000 certification, marking our commitment to international quality standards.',
      icon: Award,
    },
    {
      year: '2015',
      title: 'Modernization',
      description: 'Invested in state-of-the-art manufacturing facilities and advanced quality control systems.',
      icon: Target,
    },
    {
      year: '2020',
      title: 'Global Reach',
      description: 'Expanded international presence, serving customers across multiple continents with reliable supply chains.',
      icon: Globe,
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'Launched R&D initiatives for next-generation gelatin applications and sustainable manufacturing processes.',
      icon: Award,
    },
  ]

  const values = [
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every aspect of our manufacturing process, ensuring consistent quality and purity.',
      icon: Award,
    },
    {
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. We strive to exceed expectations and build lasting partnerships.',
      icon: Users,
    },
    {
      title: 'Innovation',
      description: 'We continuously invest in research and development to bring innovative gelatin solutions to the market.',
      icon: Target,
    },
    {
      title: 'Sustainability',
      description: 'Committed to environmentally responsible manufacturing practices and sustainable business operations.',
      icon: Globe,
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8 neon-text"
          >
            About Sadiq Gelatin Industries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            For over four decades, we have been refining the art of gelatin manufacturing, 
            combining traditional expertise with modern technology to deliver exceptional products 
            that meet the highest industry standards.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                  <Target size={32} className="text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading manufacturer of premium gelatin products by maintaining 
                uncompromising quality standards, fostering innovation, and building lasting 
                partnerships with our customers worldwide. We are committed to delivering 
                solutions that enhance the success of pharmaceutical, food, and cosmetic industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                  <Eye size={32} className="text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be recognized globally as the most trusted and innovative gelatin manufacturer, 
                setting industry benchmarks for quality, sustainability, and customer satisfaction. 
                We envision a future where our products contribute to advancing healthcare, 
                nutrition, and beauty industries worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Our Journey Through Time
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                    <item.icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-panel p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-2xl font-bold text-blue-400">{item.year}</span>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 text-center hover:animate-glow-slow"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 w-fit mx-auto mb-4">
                  <value.icon size={32} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
