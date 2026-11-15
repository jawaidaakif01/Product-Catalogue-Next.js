if (!globalThis.itemsStore) {
    globalThis.itemsStore = [
        { id: 1, name: "Notebook", price: 120 },
        { id: 2, name: "Pen", price: 20},
    ];
}

const items = globalThis.itemsStore;
export default items;