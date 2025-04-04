"use Client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function navigation() {
  const pathname = usePathname();

  return (
    <header className="bg-white text-black p-4 flex justify-between pr-10 pl-10 sticky top-0 z-50 shadow-md">
      <h1 className="text-2xl font-bold cursor-pointer hover:text-teal-500 transition duration-300">
        <Link href="/">All-In-One</Link>
        
      </h1>
      <nav className="flex space-x-6"> 
        <Link
          href="/Categories" className={pathname == "/categories/trending-now" ? "px-4 py-2 rounded-md transition duration-300 hover:bg-teal-500 hover:text-white": "text-blue-500 mr-4"}
        >
          Categories
        </Link>
        <Link
          href="/About" className={pathname == "/about" ? "px-4 py-2 rounded-md transition duration-300 hover:bg-teal-500 hover:text-white": "text-blue-500 mr-4"}
        >
        About Us
        </Link>
        <Link
          href="/Contact" className={pathname == "/contact" ? "px-4 py-2 rounded-md transition duration-300 hover:bg-teal-500 hover:text-white": "text-blue-500 mr-4"}
        >
        Contact
        </Link> 
      </nav>
    </header>
  );
}
