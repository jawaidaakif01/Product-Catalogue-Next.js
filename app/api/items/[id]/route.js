import items from "@/data/items"

function findIndexById(id) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === Number(id)) {
            return i;
        }
    }

    return -1;
}


export async function GET(request, {params}) {
    const { id } = await params;
    const index = findIndexById(id);

    if (index === -1) {
        return Response.json({ message: "Item not found" }, { status: 404 });
    }

    return Response.json(items[index]);
}


export async function PUT(request, {params}) {
    const { id } = await params;
    const body = await request.json();
    const index = findIndexById(id);

    if (index === -1) {
        return Response.json({ message: "Item not found" }, { status: 404 });
    }

    items[index].name = body.name;
    items[index].price = body.price;

    return Response.json(items[index]);
}

export async function DELETE(request, { params }) {
    const { id } = await params;
    const index = findIndexById(id);

    if (index === -1) {
        return Response.json({ message: "Item not found"}, { status: 404 });
    }

    items.splice(index, 1);

    return Response.json({ message: "Item deleted" });
}