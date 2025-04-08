import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Navbar() { 
  const pathname = usePathname();
  

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    router.push("/auth/login"); 
  };

  return (
    <header className="bg-white text-black p-4 flex justify-between pr-10 pl-10 sticky top-0 z-50 shadow-md">
      <h1 className="text-2xl font-bold cursor-pointer hover:text-teal-500 transition duration-300">
        <Link href="/">Resource Finder</Link>
        
      </h1>
      <nav className="flex space-x-6">
 
          <Link href="/"
          className={pathname==="/"?"px-4 py-2 rounded-md bg-teal-500 text-white":"px-4 py-2 rounded transition duration-300 hover:text-teal-500"}>
            Home
          </Link> 
          <Link href="/contact"
          className={pathname==="/contact"?"px-4 py-2 rounded-md bg-teal-500 text-white":"px-4 py-2 rounded transition duration-300 hover:text-teal-500"}>
            Contact
          </Link> 
          <Link href="/about"
          className={pathname==="/about"?"px-4 py-2 rounded-md bg-teal-500 text-white":"px-4 py-2 rounded transition duration-300 hover:text-teal-500"}>
            About
          </Link> 



          {user ? (
          <>
          
        <Link
          href="/profile"
          className={pathname==="/profile"?"px-4 py-2 rounded-md bg-teal-500 text-white":"px-4 py-2 rounded transition duration-300 hover:text-teal-500"}>
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className={pathname==="/logout"?"px-4 py-2 rounded-md bg-teal-500 text-white":"px-4 py-2 rounded transition duration-300 hover:text-teal-500"}>
          Logout
        </button>
        </>
          ): (
            <>
            
        <Link
          href="/auth/login"
          className={pathname==="/auth/login"?"px-4 py-2 rounded-md bg-teal-500 text-white":"px-4 py-2 rounded transition duration-300 hover:text-teal-500"}>
          Login
        </Link>
        <Link
          href="/auth/register"
          className={pathname==="/auth/register"?"px-4 py-2 rounded-md bg-teal-500 text-white":"px-4 py-2 rounded transition duration-300 hover:text-teal-500"}>
          Register
        </Link>
            </>
          )} 
      </nav>
    </header>
  );
}
