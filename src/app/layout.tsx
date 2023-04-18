import './globals.css'
// import Navbar from './components/NavBar'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import VerticalTimeline  from './components/Timeline'

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
        <Hero/>
        <About/>
        <VerticalTimeline/>
        {children}
      </body>
    </html>
  )
}
