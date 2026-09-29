# Keshav Kumar Jha: Portfolio

Source for my personal site, **[keshav.projectyourown.com](https://keshav.projectyourown.com/)**.

It covers my experience, project case studies (problem → role → impact → stack), how I approach engineering work, and a contact form.

## Stack

- **Next.js** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling, **Framer Motion** for animation
- **React Hook Form** for the contact form
- **Firebase Firestore**: the `/api/contact` route handler stores contact messages

## Structure

```
src/app/
├── page.tsx              # home: hero, about, approach, projects, skills, trust signals
├── main/                 # /main/about, /main/projects, /main/contact
├── components/           # section and card components
├── lib/constants.ts      # all site content: experience, projects, skills, links
├── config/site.ts        # site metadata
├── api/contact/route.ts  # contact form → Firestore
└── firebase/client.ts    # Firebase client (reads NEXT_PUBLIC_FIREBASE_* env vars)
```

Content lives in `src/app/lib/constants.ts`, so updating experience or adding a project doesn't require touching components.

## Running locally

Create `.env.local` with your Firebase web config:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

Then:

```bash
npm install
npm run dev   # http://localhost:3000
```

## License

[Apache 2.0](LICENSE)
