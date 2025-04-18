export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Welcome to My App</h1>
      <p className="text-gray-600 dark:text-gray-300">
        This is a starter template with Vite, React, TypeScript, and Tailwind CSS.
      </p>
      <div className="mt-6 p-6 bg-white dark:bg-gray-700 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Dark/Light mode toggle</li>
          <li>Responsive sidebar with submenus</li>
          <li>Dropdown menu</li>
          <li>React Router integration</li>
          <li>TypeScript support</li>
        </ul>
      </div>
    </div>
  )
}