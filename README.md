# Shoply

Shoply is a learning e-commerce project built with **React, TypeScript, and Vite**. It features a product catalog, individual product pages, a slide-out shopping cart, a checkout page, and a contact page.

## Features

- Home page with a banner and product catalog
- Product cards and individual product pages
- Shopping cart with the ability to add and remove items
- Automatic calculation of the total price
- Slide-out cart (`CartDrawer`) accessible from the website header
- Checkout page
- Contact page with a feedback form

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [ESLint](https://eslint.org/)

## Getting Started

Make sure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

```bash
# 1. Clone the repository
git clone <repository-url>
cd Shoply

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Once started, the application will be available at the URL provided by Vite (usually `http://localhost:5173`).

## Available Scripts

| Command           | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Starts the development server with hot module replacement |
| `npm run build`   | Builds the project into the `dist` directory              |
| `npm run preview` | Runs a local preview of the production build              |
| `npm run lint`    | Checks the code using ESLint                              |

## Project Structure

```text
Shoply/
├── public/              # Static assets (images, logos)
├── src/
│   ├── components/      # Reusable components
│   │   ├── CartDrawer.tsx
│   │   ├── Header.tsx
│   │   └── ProductCard.tsx
│   ├── data/
│   │   └── products.ts  # Product data
│   ├── pages/           # Application pages
│   │   ├── Home.tsx
│   │   ├── Product.tsx
│   │   ├── ProductPage.tsx
│   │   ├── Cart.tsx
│   │   ├── Checkout.tsx
│   │   └── Contact.tsx
│   ├── store/
│   │   └── cartStore.ts # Shopping cart state
│   ├── types/
│   │   └── index.ts     # TypeScript types
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Roadmap

- [ ] Implement contact form submission (e.g. using EmailJS or a custom API)
- [ ] Add product search and filtering
- [ ] Persist shopping cart data between sessions
- [ ] Implement responsive design for mobile devices

## Author

Created as a learning project.
