export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-sm p-4">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  )
}