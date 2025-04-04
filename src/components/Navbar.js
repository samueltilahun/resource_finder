import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white text-black p-4 flex justify-between pr-10 pl-10 sticky top-0 z-50 shadow-md">
      <h1 className="text-2xl font-bold cursor-pointer hover:text-teal-500 transition duration-300">
        <Link href="/">Online Courses</Link>
        
      </h1>
      <nav className="flex space-x-6">
        <Link
          href="/auth/login"
          className="px-4 py-2 rounded-md transition duration-300 hover:bg-teal-500 hover:text-white"
        >
          Login
        </Link>
        <Link
          href="/auth/register"
          className="px-4 py-2 rounded-md transition duration-300 hover:bg-teal-500 hover:text-white"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
