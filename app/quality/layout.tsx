import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quality & Certifications - Sadiq Gelatin Industries | ISO, Halal, FDA Approved',
  description: 'Learn about our quality standards, certifications, and commitment to excellence. ISO 9001:2015, Halal, FDA, and Kosher certified gelatin products.',
}

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
