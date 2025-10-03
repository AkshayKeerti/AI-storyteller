import type { Metadata } from 'next'
import './globals.css'
import AuthProvider from '../contexts/auth-context'

export const metadata: Metadata = {
  title: 'AI Story Builder',
  description: 'Create Amazing Stories with AI-Powered Twists',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
