# Nearwaley — website

Pre-launch marketing site for **Nearwaley** — *Never wait for help again.*

**Stack:** Next.js 16 (App Router) · Tailwind CSS 4 · Motion (Framer Motion) · GSAP + ScrollTrigger · EmailJS · Geist font (self-hosted)

## Pages

| URL | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/why-nearwaley` | Why Nearwaley (USPs, comparison, coming soon) |
| `/become-a-specialist` | Specialist onboarding form (first 50 free) |
| `/investors` | Investor page + enquiry form |
| `/about` | About us — story, vision, mission, goal |
| `/contact` | Contact details + message form |

## Run it on your computer

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # open http://localhost:3000
```

## Where to change things

- **Phone, address, WhatsApp, social links, "first 50 free", ₹2,000, 7 jobs** → `src/lib/site.ts`
- **Services list** → `src/lib/site.ts` (`services`, `comingNext`)
- **Brand colours and type sizes** → `src/app/globals.css`
- **Logo files** → `public/brand/` · favicon → `src/app/icon.png` · social share image → `src/app/opengraph-image.png`
- **Page copy** → `src/app/<page>/page.tsx`

## Connect the forms to email (EmailJS)

Until this is set up, every form opens WhatsApp with the details pre-filled — so nothing is lost.

1. Sign up at [emailjs.com](https://www.emailjs.com) and **Add New Service** → connect your Gmail / business email. Copy the **Service ID**.
2. **Email Templates → Create New Template.** Set:
   - Subject: `New {{form_type}} — Nearwaley`
   - Content:
     ```
     {{form_type}}
     Received: {{submitted_at}}

     {{summary}}
     ```
   - Reply To: `{{reply_to}}`
   Copy the **Template ID**.
3. **Account → General** → copy your **Public Key**.
4. Put the three values in `.env.local` (and in Vercel → Project → Settings → Environment Variables).
5. In EmailJS → Account → Security, add your domain to the allowed list.

One template handles all three forms; `{{form_type}}` tells you which one it came from
(Specialist application / Investor enquiry / Contact message).

## Deploy (Vercel)

1. Push this repo to GitHub.
2. [vercel.com/new](https://vercel.com/new) → import the repo → add the env variables → Deploy.
3. Vercel → Project → Settings → Domains → add your domain and follow the DNS steps.

## Animation notes

- Headline word-by-word rise and scroll reveals: `src/components/motion.tsx` (Motion)
- Hero radar rings: `src/components/RadiusVisual.tsx` (GSAP)
- "Five taps" scroll-drawn line: `src/components/StepsTimeline.tsx` (GSAP ScrollTrigger)
- About hero "lights back on": `src/components/LightsOn.tsx`
- All animations switch off automatically when a visitor has "reduce motion" turned on.
