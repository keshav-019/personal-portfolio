import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Keshav Kumar Jha | Frontend Engineer',
  description:
    'Frontend developer focused on high-performance dashboards, data-heavy interfaces, and practical AI-powered products.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
