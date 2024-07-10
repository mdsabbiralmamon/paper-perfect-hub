This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Setup environment variables:

To work this app properly you need to setup some necessary envs:

```bash

# App

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="3BRAQWnfbEfhT3fnlrVMEHe2T7TG9ky4sfs//Xx+8Vc="

# firebase

NEXT_PUBLIC_FIREBASE_API_KEY= "Add yours"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= "Add yours"
NEXT_PUBLIC_FIREBASE_PROJECT_ID= "Add yours"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET= "Add yours"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID= "Add yours"
NEXT_PUBLIC_FIREBASE_APP_ID= "Add yours"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID= "Add yours"

# github

GITHUB_ID= "Add yours"
GITHUB_SECRET= "Add yours"

GOOGLE_CLIENT_ID= "Add yours"
GOOGLE_CLIENT_SECRET= "Add yours"

```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
