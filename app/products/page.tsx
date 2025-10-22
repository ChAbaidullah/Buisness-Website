'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import { Filter, Search } from 'lucide-react'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'pharmaceutical', name: 'Pharmaceutical Grade' },
    { id: 'food', name: 'Food Grade' },
    { id: 'cosmetic', name: 'Cosmetic Grade' },
    { id: 'technical', name: 'Technical Grade' },
  ]

  const products = [
    {
      id: 1,
      title: 'Pharmaceutical Grade Gelatin',
      description: 'High-purity gelatin specifically designed for pharmaceutical applications including capsules, tablets, and injectables.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop',
      category: 'pharmaceutical',
      features: [
        'USP/EP compliant',
        'Low endotoxin levels',
        'Consistent bloom strength',
        'FDA approved',
      ],
    },
    {
      id: 2,
      title: 'Food Grade Gelatin',
      description: 'Versatile gelatin for food applications including confectionery, dairy products, and meat processing.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop',
      category: 'food',
      features: [
        'Halal certified',
        'Kosher approved',
        'Non-GMO',
        'Food safety compliant',
      ],
    },
    {
      id: 3,
      title: 'Cosmetic Grade Gelatin',
      description: 'Specialized gelatin for cosmetic and personal care products including creams, lotions, and hair care.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=300&fit=crop',
      category: 'cosmetic',
      features: [
        'High viscosity',
        'Moisture retention',
        'Film-forming properties',
        'Skin-friendly',
      ],
    },
    {
      id: 4,
      title: 'Technical Grade Gelatin',
      description: 'Industrial-grade gelatin for technical applications including adhesives, photography, and specialty coatings.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop',
      category: 'technical',
      features: [
        'High adhesive strength',
        'Thermal stability',
        'Chemical resistance',
        'Cost-effective',
      ],
    },
    {
      id: 5,
      title: 'Microcrystalline Gelatin',
      description: 'Fine-particle gelatin with enhanced solubility and rapid dissolution properties for specialized applications.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      category: 'pharmaceutical',
      features: [
        'Rapid dissolution',
        'Enhanced bioavailability',
        'Uniform particle size',
        'Pharmaceutical grade',
      ],
    },
    {
      id: 6,
      title: 'Hydrolyzed Gelatin',
      description: 'Partially hydrolyzed gelatin with reduced molecular weight for applications requiring lower viscosity.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      category: 'food',
      features: [
        'Reduced viscosity',
        'Improved solubility',
        'Enhanced digestibility',
        'Versatile applications',
      ],
    },
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
            Our Product Range
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Discover our comprehensive range of gelatin products tailored to meet the specific 
            requirements of pharmaceutical, food, cosmetic, and technical industries.
          </motion.p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-glass-light border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-neon-blue to-neon-cyan text-white'
                        : 'bg-glass-light text-gray-300 hover:text-white hover:bg-glass-dark'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  category={categories.find(cat => cat.id === product.category)?.name || product.category}
                  features={product.features}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="glass-panel p-8 max-w-md mx-auto">
                <Filter size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Products Found</h3>
                <p className="text-gray-300">
                  Try adjusting your search criteria or browse all products.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-20 px-4 bg-gradient-to-br from-charcoal/50 to-navy/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            Product Specifications
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white font-semibold">Product Grade</th>
                  <th className="text-left p-4 text-white font-semibold">Bloom Strength</th>
                  <th className="text-left p-4 text-white font-semibold">Viscosity</th>
                  <th className="text-left p-4 text-white font-semibold">pH Range</th>
                  <th className="text-left p-4 text-white font-semibold">Moisture</th>
                  <th className="text-left p-4 text-white font-semibold">Ash Content</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-gray-300">Pharmaceutical</td>
                  <td className="p-4 text-gray-300">150-300</td>
                  <td className="p-4 text-gray-300">25-45 mPas</td>
                  <td className="p-4 text-gray-300">4.5-6.5</td>
                  <td className="p-4 text-gray-300">&lt;12%</td>
                  <td className="p-4 text-gray-300">&lt;2%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-gray-300">Food Grade</td>
                  <td className="p-4 text-gray-300">100-300</td>
                  <td className="p-4 text-gray-300">20-50 mPas</td>
                  <td className="p-4 text-gray-300">4.5-6.5</td>
                  <td className="p-4 text-gray-300">&lt;14%</td>
                  <td className="p-4 text-gray-300">&lt;2.5%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-gray-300">Cosmetic</td>
                  <td className="p-4 text-gray-300">200-350</td>
                  <td className="p-4 text-gray-300">30-60 mPas</td>
                  <td className="p-4 text-gray-300">4.5-6.5</td>
                  <td className="p-4 text-gray-300">&lt;12%</td>
                  <td className="p-4 text-gray-300">&lt;2%</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Technical</td>
                  <td className="p-4 text-gray-300">100-250</td>
                  <td className="p-4 text-gray-300">15-40 mPas</td>
                  <td className="p-4 text-gray-300">4.5-6.5</td>
                  <td className="p-4 text-gray-300">&lt;15%</td>
                  <td className="p-4 text-gray-300">&lt;3%</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
