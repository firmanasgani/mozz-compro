import Link from 'next/link'

export default function NotFound() {
  return <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">404 - Page Not Found</h1>
      <p className="text-2xl">The page you are looking for does not exist.</p>
      <div className="mt-10">
        <Link href="/">
          <span className="px-4 py-2 bg-blue-500 text-white rounded">
            Go back to Home
          </span>
        </Link>
      </div>
  </div>
}


