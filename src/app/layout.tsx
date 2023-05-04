import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aiste S Koučingas',
  description: 'Apie koučingą ir kitus projektus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( // probably should update the default lang
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
