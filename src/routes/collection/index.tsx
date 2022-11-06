import { createRouteData, useRouteData } from 'solid-start'
import Bookshelf from '~/components/Bookshelf'

export function routeData() {
  return createRouteData(async () => {
    const response = await fetch('/api/books')
    return await response.json() as Book[]
  })
}

export default function Collection() {
  const books = useRouteData<typeof routeData>()

  return (
    <>
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Collection
      </h1>
      <Bookshelf books={books()} />
    </>
  )
}
