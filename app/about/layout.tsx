import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Sadiq Gelatin Industries | Our Story Since 1980',
  description: 'Learn about Sadiq Gelatin Industries - our journey from 1980, mission, vision, and commitment to quality gelatin manufacturing.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
