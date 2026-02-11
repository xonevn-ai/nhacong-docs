# AI Agent Instructions for NET Partners Documentation

## Project Overview
Vietnamese-language Docusaurus v3 documentation site for **NET Partners (Nhà Cộng)** - a property management platform connecting Hosts (Chủ nhà), Residents (Cư dân), and Agents (Cộng tác viên).

## Architecture & Structure

### Core Components
- **Framework**: Docusaurus v3.9.2 with TypeScript, React 19
- **Content**: Role-based documentation organized in `docs/` by user type
- **Blog**: Community articles in `blog/` for marketing/educational content
- **Deployment**: GitHub Pages (`xonevn-ai/nhacong-docs`, base: `/nhacong-docs/`)

### Directory Organization
```
docs/
  ├── auth/          # Login, registration, password recovery
  ├── host/          # Host features (buildings, finance, residents)
  ├── customer/      # Resident features (billing, contracts, support)
  ├── agent/         # Agent features (marketing, leads, commissions)
  ├── public/        # Public-facing features (VR 360 tours)
  └── tools/         # Shared utilities (chat, notifications)
```

### Sidebar Configuration
Navigation is defined in [sidebars.ts](sidebars.ts) with hierarchical categories. Each section uses emoji prefixes:
- 🏠 Host (Chủ nhà) - Building/financial management
- 👤 Resident (Cư dân) - Tenant services
- 🤝 Agent (CTV) - Marketing tools
- 🌐 Public (Công cộng) - Search/discovery

## Development Workflows

### Local Development
```bash
npm install          # Install dependencies
npm run start        # Dev server on http://localhost:3000
npm run build        # Production build to build/
npm run serve        # Preview production build
```

### Deployment to GitHub Pages
```bash
set GIT_USER=xonevn-ai
npm run deploy
```
This builds the site and pushes to `gh-pages` branch. Configured for:
- Organization: `xonevn-ai`
- Repository: `nhacong-docs`
- Base URL: `/nhacong-docs/`

### Other Commands
```bash
npm run clear              # Clear Docusaurus cache
npm run typecheck          # Run TypeScript checks
npm run write-translations # Extract i18n strings
```

## Content & Styling Conventions

### Language & Tone
- **Primary language**: Vietnamese (vi)
- **Formal tone**: Professional but approachable for B2B/B2C audience
- **Technical accuracy**: Document actual features, not aspirational ones

### Documentation Patterns
1. **Frontmatter** on all docs:
   ```markdown
   ---
   sidebar_position: 1  # For ordering within category
   ---
   ```

2. **Navigation labels** use emoji + Vietnamese:
   ```typescript
   { type: 'doc', id: 'host/finance/invoices', label: 'Hóa đôn & Đối soát' }
   ```

3. **Callouts** for important info:
   ```markdown
   > [!TIP]
   > **Gợi ý hữu ích**
   > Nội dung gợi ý...
   ```

### Visual Branding
- **Primary color**: Emerald green (`#10b981`) - see [src/css/custom.css](src/css/custom.css)
- **Typography**: Roboto font family
- **Border radius**: 12px (modern rounded UI)
- **Dark mode**: Supported via `respectPrefersColorScheme`

### Blog Posts
Located in [blog/](blog/), use slug-based URLs and tag system:
```markdown
---
slug: quan-ly-toa-nha-4-0-xu-huong
title: Quản lý tòa nhà 4.0...
authors: [admin]
tags: [chu-nha, van-hanh, tai-chinh]
---
```

## Key Configuration Files

### [docusaurus.config.ts](docusaurus.config.ts)
- Site metadata (title, tagline, favicon)
- Deployment config (GitHub Pages settings)
- Theme customization (navbar, footer, colorMode)
- **Future flag**: `v4: true` enabled for Docusaurus v4 compatibility
- **Localization**: Default locale set to `'vi'`

### [sidebars.ts](sidebars.ts)
- Defines `tutorialSidebar` with nested categories
- Categories mirror `docs/` folder structure
- Keep category labels consistent with README.md role descriptions

### [package.json](package.json)
- Node.js >=20.0 required
- Uses npm (not yarn) - all commands reference `npm run`

## Common Tasks

### Adding a New Documentation Page
1. Create markdown file in appropriate `docs/` subdirectory
2. Add frontmatter with `sidebar_position` if needed
3. Register in [sidebars.ts](sidebars.ts) under relevant category
4. Use Vietnamese language and maintain emoji conventions

### Updating Navigation
Edit [sidebars.ts](sidebars.ts). Structure:
```typescript
{
  type: 'category',
  label: '🏠 Dành cho Chủ nhà',
  items: [
    { type: 'doc', id: 'host/overview/buildings', label: 'Tổng quan Tòa nhà' }
  ]
}
```

### Modifying Styles
Edit [src/css/custom.css](src/css/custom.css). Primary brand colors are CSS variables:
- `--ifm-color-primary` and variants for light/dark modes
- Maintains emerald green theme across light/dark modes

### Testing Changes
1. Run `npm run start` - auto-reloads on file changes
2. Check both light and dark modes (toggle in navbar)
3. Verify sidebar navigation updates
4. Run `npm run build` to catch TypeScript/config errors before deploy

## Important Notes

- **No client-side code** in [docusaurus.config.ts](docusaurus.config.ts) (runs in Node.js)
- **Asset paths** in docs use relative paths or `/img/` for static assets
- **Link references**: Use markdown `[text](/docs/path)` for internal docs
- **Build output**: Generated in `build/` (excluded from git)
- **README.md vs README_dev.md**: Primary README has project overview; dev README has basic setup
