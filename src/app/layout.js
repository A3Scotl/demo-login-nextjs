import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Đăng nhập tài khoản',
  description: 'Giao diện đăng nhập với Next.js và Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning={true}>
      <body 
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}