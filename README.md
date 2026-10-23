# Audiophile

A modern e-commerce storefront built with [Next.js](https://nextjs.org/) and powered by [Convex](https://www.convex.dev/) for backend-as-a-service.

## Tech Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Convex for database, authentication, and serverless functions

## Why Convex?

Convex gives this project a hosted backend with:

- real-time data subscriptions
- type-safe queries and mutations
- built-in database and serverless functions
- a fast foundation for products, carts, and checkout flows

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the Convex backend locally:

```bash
npx convex dev
```

3. Create a local environment file:

```bash
cp .env.local.example .env.local
```

Then add your Convex values. Example:

```env
NEXT_PUBLIC_CONVEX_URL="https://your-project.convex.cloud"
CONVEX_URL="https://your-project.convex.cloud"
```

If you are creating a new Convex project, the CLI will guide you through setup and provide the correct values.

4. Start the frontend:

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

## Project Structure

```bash
app/
components/
convex/
public/
```

The `convex/` folder is where your backend functions, schema, and data logic live.

## Typical Convex Usage

This project can use Convex for:

- fetching product catalog data
- storing cart state for authenticated users
- order creation and checkout flows
- real-time updates across clients

## Deployment

Deploy the frontend on Vercel and connect it to your Convex deployment for the backend-as-a-service layer.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev/)
- [Convex + Next.js Guide](https://docs.convex.dev/client/react/nextjs/)

