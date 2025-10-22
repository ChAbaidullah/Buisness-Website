import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Sadiq Gelatin Industries | Premium Gelatin Solutions',
  description: 'Explore our comprehensive range of gelatin products for pharmaceutical, food, cosmetic, and technical applications.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
