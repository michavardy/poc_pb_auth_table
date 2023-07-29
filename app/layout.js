'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import TopBar from '@/components/TopBar'
import NavBar from '@/components/NavBar'
import {AuthContextProvider} from '@/components/AuthContextProvider'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <AuthContextProvider>
        <TopBar/>
        <div className="flex h-screen">
        <NavBar/>
        {children}
        </div>
        </AuthContextProvider>
        </body>
    </html>
  )
}
