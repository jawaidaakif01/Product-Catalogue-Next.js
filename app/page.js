import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Welcome to MyStore</h1>
      <p>A small project built with Next.js to practice routing, APIs, and components.</p>
      <div className="flex gap-4">
        <Link
          href="/products"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Browse Products
        </Link>
        <Link
          href="/my-items"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Manage My Items
        </Link>
      </div>
    </div>
  );
}