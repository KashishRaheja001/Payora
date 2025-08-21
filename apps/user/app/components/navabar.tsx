import Link from "next/link"

export const Dashboard = () => {
  return (
    <main>
      <nav className="w-full bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">
          <Link href="/">Payora</Link>
        </div>

        {/* Nav Links */}
        <div className="flex gap-8 text-2xl ">
          <Link href="/" className="hover:text-gray-300 transition hover:-translate-y-1 hover:scale-110 ">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-gray-300 transition hover:-translate-y-1 hover:scale-110">
            Dashboard
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition hover:-translate-y-1 hover:scale-110">
            About
          </Link>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-3 py-1 rounded bg-green-500 hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </main>
  )
}