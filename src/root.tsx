// @refresh reload
import { Suspense } from 'solid-js'
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start'
import NavButton from './components/NavButton'
import './root.css'

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Bookshelf</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <header>
              <nav class="flex justify-center gap-4 p-4 bg-blue-300">
                <NavButton href="/">Home</NavButton>
                <NavButton href="/collection">Collection</NavButton>
                <NavButton href="/discover">Discover</NavButton>
              </nav>
            </header>
            <main class="flex flex-col items-center p-4">
              <Routes>
                <FileRoutes />
              </Routes>
            </main>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
