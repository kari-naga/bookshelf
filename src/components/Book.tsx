
export default function Book(props: Book) {
  return (
    <div class="p-4 w-40 h-80 border-2 border-black rounded-2xl text-center flex flex-col justify-center items-center gap-4">
      <h1 class="text-xl font-semibold">{ props.title }</h1>
      <h2 class="text-lg font-light">{ props.author }</h2>
      <p>{ props.description }</p>
    </div>
  )
}