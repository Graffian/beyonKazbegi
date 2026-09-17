# Beyond Kazbegi — Web

A minimal **Next.js** version of the Tourvia landing page, extracted from the
agent-native app. Purposefully dependency-light so anyone can run it.

## Requirements

- **Node.js 20+** (npm comes with it)

## Run it

```bash
cd web
npm install
npm run dev
```

Open http://localhost:3000.

## Other commands

| Command          | What it does                       |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Start the dev server (localhost:3000) |
| `npm run build`  | Create a production build          |
| `npm run start`  | Serve the production build after `npm run build` |
| `npm run lint`   | Lint the code                      |

## Structure

```
app/
  layout.tsx          Root layout (fonts, HTML shell, metadata)
  page.tsx            Homepage (server component, SEO metadata)
  globals.css         Stylesheet (Tourvia styles + base reset)
  components/
    home-page.tsx     The homepage UI (client component)
```

## Notes

- Content is the original Tourvia template (fake luxury-travel demo content,
  pexels images). Replace copy/images when branding for real.
- No backend, database, or API keys needed.