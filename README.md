# Next.js starter template.

- Next.js
- TypeScript
- ESLint
- Prettier
- Jest
- Tailwind CSS

## Email Service Setup (Resend)

This project uses Resend for sending emails. To set up email functionality:

1. Sign up for a Resend account at https://resend.com
2. Create an API key in your Resend dashboard
3. Create a `.env.local` file in the root directory with the following variables:

```env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Replace `your_resend_api_key_here` with your actual Resend API key

## Development

```bash
yarn dev
```

## Build

```bash
yarn build
```
