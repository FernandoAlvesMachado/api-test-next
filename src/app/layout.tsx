import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import TopMenu from './components/TopMenu.jsx'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '600','700', '800']
})

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description: 'Your best story tec',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
      <TopMenu />
        {children}</body>
    </html>
  )
}
