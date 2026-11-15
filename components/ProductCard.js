import Link from "next/link";
import LikeButton from "./LikeButton";

export default function ProductCard(props) {
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow p-4 flex flex-col gap-2">
      <h3 className="font-semibold text-lg">{props.name}</h3>
      <p className="text-gray-600">Price: ${props.price}</p>
      <Link
        href={"/products/" + props.id}
        className="text-blue-600 hover:underline"
      >
        View details
      </Link>
      <LikeButton />
    </div>
  );
}