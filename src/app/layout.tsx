import './globals.css'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'iNoah',
  description: 'Welcome to my portfolio!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
