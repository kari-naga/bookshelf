import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
import vercel from 'solid-start-vercel'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    solid({
      adapter: vercel({
        edge: true
      }),
    }),
    Icons({
      compiler: 'solid',
      autoInstall: true,
    }),
  ],
})
