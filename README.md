# Next.js Learning Project (MyStore)

A small app built to learn Next.js fundamentals: App Router, routing,
Server and Client Components, API integration, Route Handlers, and Tailwind CSS.

## Tech used
- Next.js (App Router), React, JavaScript
- Tailwind CSS and CSS Modules
- DummyJSON (external API)

## How to run
1. Clone the repo
2. `npm install`
3. `npm run dev`
4. Open http://localhost:3000

## Features
- Home, About, and Products pages
- Products list and detail pages using data from DummyJSON
- Own API at `/api/items` with GET, POST, PUT, DELETE
- "My Items" page to add, edit, and delete items
- Responsive layout with a reusable Navbar, Card, Form, and Footer

## Project structure
app/
page.js Home page
layout.js Shared layout (Navbar, Footer)
about/page.js About page
products/page.js Products list (fetches DummyJSON)
products/[id]/page.js Product detail (dynamic route)
my-items/page.js Items manager page
api/items/route.js GET all, POST
api/items/[id]/route.js GET one, PUT, DELETE
components/ Navbar, ProductCard, LikeButton, ItemForm, ItemManager, Footer
data/items.js In-memory data for our own API


## What I learned

### 1. What is Next.js and why use it
React builds the UI only. Next.js adds routing, a backend, and speed
improvements in one framework.

### 2. Routing (App Router)
- A folder inside `app/` becomes a URL, and `page.js` is what is shown
- `layout.js` is a shared frame, and `{children}` is where the page appears
- `[id]` folders create dynamic routes
- `Link` moves between pages without a full reload

### 3. Server and Client Components
- Components are Server Components by default (run on the server)
- `"use client"` is needed for state, clicks, and typing
- Best practice: keep Client Components small, inside Server Components
- Props pass data in, and state is data a component remembers

### 4. Fetching data
- Server Components can be `async`, so `await fetch()` works directly
- `loading.js` and `error.js` handle waiting and failures

### 5. Own API (Route Handlers)
- `route.js` creates an API address
- Exported function names (`GET`, `POST`, `PUT`, `DELETE`) set the method
- Status codes used: 200, 201, 404

### 6. Styling
- Tailwind: small utility classes on elements, with `md:`/`lg:` for responsive
- CSS Modules: a CSS file whose class names stay private to one component

## Possible improvements
- Store data in a real database instead of memory
- Add search and filters
- Add login
- Deploy it (for example on Vercel)