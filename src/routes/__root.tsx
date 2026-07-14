import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1',
      },
      {
        title: 'Filbert Christian Winch | Terminal Portfolio',
      },
      {
        name: 'description',
        content:
          'Interactive terminal-style portfolio of Filbert Christian Winch — Full-Stack Engineer, ML Researcher, DevOps Engineer. Explore my experience, projects, and skills through an immersive terminal interface.',
      },
      {
        name: 'author',
        content: 'Filbert Christian Winch',
      },
      {
        property: 'og:title',
        content: 'Filbert Christian Winch | Terminal Portfolio',
      },
      {
        property: 'og:description',
        content:
          'Interactive terminal-style portfolio — Full-Stack Engineer, ML Researcher, DevOps Engineer.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'theme-color',
        content: '#0a0e14',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  return <Outlet />
}
