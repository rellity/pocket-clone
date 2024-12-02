import Footer from '@/components/user/footer'
import Header from '@/components/user/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
