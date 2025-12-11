# Inspector React + Vite + shadcn/ui Template

A modern React + Vite template styled with the Inspector design language and powered by shadcn/ui.

## 🛠️ Tech Stack

- **React 19** - A JavaScript library for building user interfaces
- **Vite** - A fast, opinionated frontend build tool
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS v3** - Utility-first CSS framework
- **shadcn/ui** - Beautifully designed components
- **Radix UI** - Accessible component primitives
- **Lucide Icons** - Beautiful, consistent icon set

## 🎨 Features

- **Dark/Light Mode** - Built-in theme toggle with localStorage persistence
- **Inspector Styling** - Matches the Inspector app design language
- **Ready to Build** - Start adding your own components immediately

## ⚙️ Prerequisites

- Node.js (version 22 or above)
- pnpm (recommended) or npm

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## 📂 Project Structure

```
inspector-react-vite-shadcn-ui/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   └── inspector-logo.png
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/
│   │   └── use-dark-mode.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts
└── vite.config.ts
```

## ➕ Adding Components

Use the shadcn/ui CLI to add more components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# etc.
```

Browse all available components at [ui.shadcn.com](https://ui.shadcn.com/docs/components).

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
