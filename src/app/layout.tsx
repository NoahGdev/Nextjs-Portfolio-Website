import './globals.css'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
  openGraph: {
    title: 'iNoah',
    description: 'Welcome to my portfolio!',
    siteName: 'inoah.dev',
    images: [
      {
        url: "/screenshot.png"
      }
    ],
    locale: 'en-GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iNoah',
    description: 'Welcome to my portfolio!',
    // siteId: '1467726470533754880',
    creator: '@NoxhDevs',
    // creatorId: '1467726470533754880',
    images: ['/screenshot.png'],
  },
  category: 'technology',
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
