// import Link from "next/link";
// import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    const products = data.products;

    const cards = [];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        cards.push(
            <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price} />
        );
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards}
            </div>
        </div>
    );
}