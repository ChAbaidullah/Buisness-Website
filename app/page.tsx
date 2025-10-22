import HeroSection from '@/components/HeroSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Company Highlights Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 text-center hover:animate-glow-slow">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-4 neon-text">Industrial Excellence</h3>
              <p className="text-gray-300">
                State-of-the-art manufacturing facilities with cutting-edge technology 
                ensuring consistent quality and purity in every batch.
              </p>
            </div>
            
            <div className="glass-panel p-8 text-center hover:animate-glow-slow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-4 neon-text">Global Reach</h3>
              <p className="text-gray-300">
                Serving customers worldwide with reliable supply chains and 
                comprehensive distribution networks across multiple continents.
              </p>
            </div>
            
            <div className="glass-panel p-8 text-center hover:animate-glow-slow">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-4 neon-text">Research & Innovation</h3>
              <p className="text-gray-300">
                Continuous R&D investment driving innovation in gelatin applications 
                for pharmaceutical, food, and cosmetic industries.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-navy/50 to-charcoal/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 neon-text">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Discover our comprehensive range of gelatin products tailored to your industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/products" className="btn-primary text-lg px-8 py-4">
              Explore Products
            </a>
            <a href="/contact" className="btn-glass text-lg px-8 py-4">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
