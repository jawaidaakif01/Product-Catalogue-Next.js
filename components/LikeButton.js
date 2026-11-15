"use client";

import { useState } from "react";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        console.log("Button clicked - this runs in the BROWSER");
        setLikes(likes + 1);
    }

    return (
        <button
            onClick={handleClick}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
            👍 Likes: {likes}
        </button>
);
}