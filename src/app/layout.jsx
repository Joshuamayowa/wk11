import Navbar from './components/Navbar'
import './globals.css'
import Footer from './components/footer'
import { Fasthand } from 'next/font/google'

const fast = Fasthand({ 
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: 'Learning Next JS',
  description: 'Understanding the principle of Next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fast.className}>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
