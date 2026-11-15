"use Client";

import { useState } from "react";

export default function ItemForm(props) {
    const [name, setName] = useState(props.initialName || "");
    const [price, setPrice] = useState(props.initialPrice || "");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handlePriceChange(event) {
        setPrice(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (name === "" || price === "" ) {
            alert("Please fill both fields");
            return;
        }

        props.onSubmit(name, Number(price));

        if (props.clearAfterSubmit) {
            setName("");
            setPrice("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
            <input 
                type="text"
                placeholder="Item name"
                value={name}
                onChange={handleNameChange}
                className="border rounded px-2 py-1 bg-white text-gray-900" />
            <input 
                type="number"
                placeholder="Price"
                value={price}
                onChange={handlePriceChange}
                className="border rounded px-2 py-1 bg-white text-gray-900" />
            <button
                type="submit"
                className="border rounded px-2 py-1 w-28 bg-white text-gray-900"
            >
                {props.buttonText}
            </button>
        </form>
    );
}