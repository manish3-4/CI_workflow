import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Platform</h1>
        <p className="text-xl mb-8 opacity-90">
          Build amazing things with our powerful tools
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all shadow-lg"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all shadow-lg"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
