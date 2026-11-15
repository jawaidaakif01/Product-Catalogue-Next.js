import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex gap-6">
      <Link href="/" className="font-bold text-lg">
        MyStore
      </Link>
      <Link href="/about" className="hover:text-blue-400">
        About
      </Link>
      <Link href="/products" className="hover:text-blue-400">
        Products
      </Link>
      <Link href="/my-items" className="hover:text-blue-400">
        My Items
      </Link>
    </nav>
  );
}