export default function App(){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">N1STREET</h1>
          <nav>
            <a className="mr-4 text-sm text-gray-600 hover:text-gray-900">Home</a>
            <a className="mr-4 text-sm text-gray-600 hover:text-gray-900">About</a>
            <a className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="bg-white rounded-lg shadow p-8">
          <h2 className="text-3xl font-semibold mb-2">Welcome to N1STREET</h2>
          <p className="text-gray-600 mb-6">This is a starter React + Vite + Tailwind app. Customize it to match your Netlify site.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded">Feature 1</div>
            <div className="p-4 border rounded">Feature 2</div>
            <div className="p-4 border rounded">Feature 3</div>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-medium mb-2">Get started</h3>
          <ol className="list-decimal list-inside text-gray-700">
            <li>Install dependencies: <code>npm install</code></li>
            <li>Run locally: <code>npm run dev</code></li>
            <li>Build for production: <code>npm run build</code></li>
          </ol>
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} N1STREET
      </footer>
    </div>
  )
}
