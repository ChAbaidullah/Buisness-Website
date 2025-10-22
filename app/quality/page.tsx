'use client'

import { motion } from 'framer-motion'
import CertificationCard from '@/components/CertificationCard'
import { Award, Shield, CheckCircle, Globe, Microscope, Users } from 'lucide-react'

export default function QualityPage() {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'International standard for quality management systems ensuring consistent product quality and customer satisfaction.',
      icon: Award,
      year: '2015',
    },
    {
      title: 'Halal Certification',
      description: 'Certified by recognized Islamic authorities ensuring our products meet Halal requirements for Muslim consumers.',
      icon: Shield,
      year: '2010',
    },
    {
      title: 'FDA Approval',
      description: 'Approved by the US Food and Drug Administration for pharmaceutical and food applications.',
      icon: CheckCircle,
      year: '2008',
    },
    {
      title: 'Kosher Certification',
      description: 'Certified Kosher by recognized Jewish authorities for products suitable for Kosher dietary requirements.',
      icon: Globe,
      year: '2012',
    },
    {
      title: 'GMP Compliance',
      description: 'Good Manufacturing Practices compliance ensuring highest standards in production and quality control.',
      icon: Microscope,
      year: '2018',
    },
    {
      title: 'HACCP Certified',
      description: 'Hazard Analysis and Critical Control Points certification for food safety management.',
      icon: Shield,
      year: '2016',
    },
  ]

  const qualityProcesses = [
    {
      title: 'Raw Material Inspection',
      description: 'Rigorous testing of incoming raw materials to ensure purity and quality standards.',
      icon: Microscope,
    },
    {
      title: 'In-Process Monitoring',
      description: 'Continuous monitoring during manufacturing to maintain consistent quality parameters.',
      icon: CheckCircle,
    },
    {
      title: 'Final Product Testing',
      description: 'Comprehensive testing of finished products including microbiological and chemical analysis.',
      icon: Award,
    },
    {
      title: 'Quality Documentation',
      description: 'Complete traceability and documentation of all quality processes and test results.',
      icon: Users,
    },
  ]

  const testingCapabilities = [
    'Bloom Strength Testing',
    'Viscosity Measurement',
    'pH Analysis',
    'Moisture Content',
    'Ash Content',
    'Protein Content',
    'Microbiological Testing',
    'Heavy Metals Analysis',
    'Endotoxin Testing',
    'Particle Size Distribution',
    'Color Analysis',
    'Odor Assessment',
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-navy/50 to-charcoal/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8 neon-text"
          >
            Quality & Certifications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Our commitment to quality is unwavering. We maintain the highest standards through 
            rigorous testing, continuous improvement, and international certifications that 
            ensure our products meet global industry requirements.
          </motion.p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Our Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CertificationCard
                  title={cert.title}
                  description={cert.description}
                  icon={cert.icon}
                  year={cert.year}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-20 px-4 bg-gradient-to-br from-charcoal/50 to-navy/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Quality Assurance Process
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcesses.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 text-center hover:animate-glow-slow"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 border border-neon-blue/30 w-fit mx-auto mb-4">
                  <process.icon size={32} className="text-neon-blue" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{process.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Advanced Testing Capabilities
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Our state-of-the-art laboratory is equipped with advanced testing equipment 
                and staffed by qualified technicians to ensure comprehensive quality control 
                and product analysis.
              </p>
              <div className="glass-panel p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Laboratory Equipment</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• High-performance liquid chromatography (HPLC)</li>
                  <li>• Atomic absorption spectrophotometer</li>
                  <li>• Microbiological testing equipment</li>
                  <li>• Texture analyzer for bloom strength</li>
                  <li>• Viscometer for viscosity measurement</li>
                  <li>• pH meters and conductivity meters</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Testing Parameters</h3>
              <div className="grid grid-cols-2 gap-3">
                {testingCapabilities.map((test, index) => (
                  <motion.div
                    key={test}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-2 text-sm text-gray-300"
                  >
                    <CheckCircle size={16} className="text-neon-blue flex-shrink-0" />
                    <span>{test}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 px-4 bg-gradient-to-br from-navy/50 to-charcoal/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            Our Quality Commitment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed mb-8"
          >
            Quality is not just a process at Sadiq Gelatin Industries—it's our core value. 
            We continuously invest in technology, training, and process improvement to ensure 
            that every product we manufacture meets the highest international standards.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-panel p-8 max-w-2xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-neon-blue mb-2">99.9%</div>
                <div className="text-gray-300">Quality Pass Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-blue mb-2">24/7</div>
                <div className="text-gray-300">Quality Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-blue mb-2">100%</div>
                <div className="text-gray-300">Traceability</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
