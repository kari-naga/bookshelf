import { JSX } from 'solid-js'
import { A } from 'solid-start'

interface Props {
  href: string
  selected?: boolean
  children: JSX.Element
}

export default function NavButton(props: Props) {
  return (
    <A href={props.href}>
      <button class="p-4 rounded-2xl text-2xl font-medium tracking-wide hover:bg-blue-400 active:bg-blue-500">
        { props.children }
      </button>
    </A>
  )
}