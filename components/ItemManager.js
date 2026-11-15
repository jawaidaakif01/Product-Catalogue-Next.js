"use client";

import { useState, useEffect } from "react";
import ItemForm from "./ItemForm";

export default function ItemManager() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Runs once when the page opens: load items from our API
  useEffect(() => {
    async function loadItems() {
      try {
        const response = await fetch("/api/items");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        setErrorMessage("Could not load items");
      }
      setIsLoading(false);
    }

    loadItems();
  }, []);

  // ADD: call POST, then put the new item at the end of the list
  async function handleAdd(name, price) {
    const response = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, price: price }),
    });

    if (response.ok === false) {
      setErrorMessage("Could not add the item");
      return;
    }

    const newItem = await response.json();
    const updatedItems = items.concat([newItem]);
    setItems(updatedItems);
    setErrorMessage("");
  }

  // DELETE: call DELETE, then remove that item from the list
  async function handleDelete(id) {
    const response = await fetch("/api/items/" + id, { method: "DELETE" });

    if (response.ok === false) {
      setErrorMessage("Could not delete the item");
      return;
    }

    const updatedItems = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].id !== id) {
        updatedItems.push(items[i]);
      }
    }
    setItems(updatedItems);
    setErrorMessage("");
  }

  // UPDATE: call PUT, then replace that item in the list
  async function handleUpdate(id, name, price) {
    const response = await fetch("/api/items/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, price: price }),
    });

    if (response.ok === false) {
      setErrorMessage("Could not update the item");
      return;
    }

    const savedItem = await response.json();
    const updatedItems = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        updatedItems.push(savedItem);
      } else {
        updatedItems.push(items[i]);
      }
    }
    setItems(updatedItems);
    setEditingId(null);
    setErrorMessage("");
  }

  // Build one row for each item
  const rows = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.id === editingId) {
      // This row is being edited: show the form
      rows.push(
        <li key={item.id} className="bg-white text-gray-900 rounded shadow p-3">
          <ItemForm
            initialName={item.name}
            initialPrice={item.price}
            buttonText="Save"
            onSubmit={function (name, price) {
              handleUpdate(item.id, name, price);
            }}
          />
          <button
            onClick={function () {
              setEditingId(null);
            }}
            className="text-sm text-gray-500 mt-2 hover:underline"
          >
            Cancel
          </button>
        </li>
      );
    } else {
      // Normal row: show the item with Edit and Delete buttons
      rows.push(
        <li
          key={item.id}
          className="bg-white text-gray-900 rounded shadow p-3 flex justify-between items-center"
        >
          <span>
            {item.name} - ₹{item.price}
          </span>
          <span className="flex gap-3">
            <button
              onClick={function () {
                setEditingId(item.id);
              }}
              className="text-blue-600 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={function () {
                handleDelete(item.id);
              }}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </span>
        </li>
      );
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="font-semibold mb-2">Add a new item</h2>
        <ItemForm
          buttonText="Add"
          clearAfterSubmit={true}
          onSubmit={handleAdd}
        />
      </div>

      {errorMessage !== "" && <p className="text-red-500">{errorMessage}</p>}

      {isLoading && <p>Loading items...</p>}

      {isLoading === false && items.length === 0 && (
        <p>No items yet. Add your first one above.</p>
      )}

      <ul className="flex flex-col gap-2">{rows}</ul>
    </div>
  );
}