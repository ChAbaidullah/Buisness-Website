import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Sadiq Gelatin Industries | Get In Touch',
  description: 'Contact Sadiq Gelatin Industries for product inquiries, technical support, or partnership opportunities. We are here to help with your gelatin requirements.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
