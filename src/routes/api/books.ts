import { json } from "solid-start";

const books: Book[] = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A hobbit is a small human-like creature",
  },
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    description: "The first book in the Lord of the Rings trilogy",
  },
  {
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    description: "The second book in the Lord of the Rings trilogy",
  },
  {
    title: "The Return of the King",
    author: "J.R.R. Tolkien",
    description: "The third book in the Lord of the Rings trilogy",
  },
  {
    title: "The Silmarillion",
    author: "J.R.R. Tolkien",
    description: "The first book in the Silmarillion",
  },
  {
    title: "The Children of Hurin",
    author: "J.R.R. Tolkien",
    description: "The second book in the Silmarillion",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    description: "The first book in the Hunger Games trilogy",
  },
]

export function GET() {
  return json(books)
}