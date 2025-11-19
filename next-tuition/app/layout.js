import './globals.css'
import { Inter } from '@next/font/google'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tuition Institute',
  description: 'Modern tuition platform for online and offline learning',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}> 
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
