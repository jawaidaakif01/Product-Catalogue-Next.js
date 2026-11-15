import products from "@/data/products";

export default async function ProductDetailPage({params}) {
    const { id } = await params;
    const response = await fetch("https://dummyjson.com/products/" + id);

    if (response.ok === false) {
        return <h1>Product not found</h1>;
    }

    const product = await response.json();

    return (
        <div className="bg-white text-gray-900 rounded-lg shadow p-6 max-w-xl">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-green-600 font-semibold mt-2">${product.price}</p>
            <p className="text-sm text-gray-500 mt-1">Category: {product.category}</p>
            <p className="mt-4">{product.description}</p>
        </div>
);
}