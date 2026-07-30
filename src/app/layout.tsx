import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Keshav Kumar Jha | Software Engineer',
  description:
    'Software engineer focused on AI-native developer tools, backend systems, automation, and practical product platforms.',
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
