import items from "@/data/items"

export async function GET() {
    return Response.json(items);
}

export async function POST(request) {
    const body = await request.json();

    let biggestID = 0;
    for (let i = 0; i < items.length; i++){
        if(items[i].id > biggestID) {
            biggestID = items[i].id;
        }
    }

    const newItem = {
        id: biggestID + 1,
        name: body.name,
        price: body.price,
    };

    items.push(newItem);

    return Response.json(newItem, {status: 201});
}