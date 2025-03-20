# BCRegistry

## Tech
- Framework: [Nuxt 3](https://nuxt.com/)
- UI Library: [Nuxt UI v3](https://ui.nuxt.com/)
- Markdown Renderer: [Nuxt Content v3](https://content.nuxt.com/)

## Development and Contributing

Please review the [Code of Conduct](./CODE_OF_CONDUCT.md) and [Contributing](./CONTRIBUTING.md) guidelines before contributing to this project to ensure a positive and productive experience for everyone.

Create a fork and local copy of this repo. Answer _Y_ to create a local clone.
```bash
gh repo fork bcgov/bcregistry
```

Change into the directory and install the packages.
```bash
cd bcgov/bcregistry
pnpm install
```

Startup the development environment.
```bash
pnpm run dev
```

## Build and Preview

Build the static site
```bash
pnpm run generate
```

Locally preview the static site
```bash
npx http-server .output/public
```
