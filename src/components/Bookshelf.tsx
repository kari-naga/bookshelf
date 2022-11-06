import { For } from "solid-js"
import Book from "./Book"

interface Props {
  books: Book[]
}

export default function Bookshelf(props: Props) {
  return (
    <div>
      <div class="flex justify-center flex-wrap gap-4">
        <For each={props.books} fallback={<div>Loading...</div>}>{(book) =>
          <Book {...book}></Book>
        }</For>
      </div>
    </div>
  )
}