import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 p-4">
        <Outlet /> {/* Ini akan menampilkan children route */}
      </main>
      <Footer />
    </div>
  )
}