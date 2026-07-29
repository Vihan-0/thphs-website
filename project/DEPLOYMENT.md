# Production Deployment & Infrastructure Plan: Town Hall Public School

## Purpose

This document provides a step-by-step deployment runbook, infrastructure specification, Vercel configuration guide, domain setup protocol, and post-launch verification checklist for the Town Hall Public School website.

---

## 1. Hosting Architecture & Infrastructure Stack

The website is engineered for zero-maintenance serverless deployment on the **Vercel Edge Network**.

```
+-----------------------------------------------------------------------------------+
|                            PRODUCTION INFRASTRUCTURE                              |
|                                                                                   |
|  Source Repository : GitHub (Private Repo)                                       |
|  Deployment Host   : Vercel Global Edge Network                                  |
|  Build Framework   : Next.js 15 App Router                                       |
|  Domain Target     : https://www.townhallpublicschool.com                        |
|  SSL Security      : Automatic TLS 1.3 / Let's Encrypt Certificate               |
|  CDN / Caching     : Vercel Edge Cache with ISR (Incremental Static Regeneration)|
+-----------------------------------------------------------------------------------+
```

---

## 2. Environment Variables Configuration

The production build requires the following environment variable keys configured in the Vercel Project Settings:

| Variable Name | Environment | Description | Production Value |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Production | Base canonical site URL | `https://www.townhallpublicschool.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID`| Production | Google Analytics 4 ID | `[PLACEHOLDER - Client GA4 ID]` |
| `CONTACT_FORM_RECIPIENT_EMAIL` | Production | Receiver for inquiry submissions | `thps1996@gmail.com` |
| `CAREERS_FORM_RECIPIENT_EMAIL` | Production | Receiver for job applications | `thps1996@gmail.com` |

---

## 3. Step-by-Step Vercel Deployment Runbook

### Step 1: Pre-Build Code Audit
- Run `npm run lint` to verify zero TypeScript or ESLint errors.
- Run `npm run build` locally to verify successful static site generation and zero broken dynamic routes.
- Confirm zero occurrences of raw invented text or missing placeholder markers.

### Step 2: Vercel Project Creation
1. Connect Vercel account to the GitHub repository.
2. Select **Framework Preset: Next.js**.
3. Set **Build Command**: `next build`.
4. Set **Output Directory**: `.next`.

### Step 3: Domain & DNS Configuration
1. Add custom domain `townhallpublicschool.com` and `www.townhallpublicschool.com` in Vercel Domain settings.
2. Configure DNS A Record pointing `@` to `76.76.21.21`.
3. Configure DNS CNAME Record pointing `www` to `cname.vercel-dns.com`.
4. Verify SSL certificate auto-issuance.

---

## 4. Post-Launch Quality Assurance Checklist

- [ ] **DNS & SSL**: Verify HTTPS redirect works seamlessly across desktop and mobile browsers.
- [ ] **Contact Form Test**: Submit test inquiry via `/contact` form and confirm email notification delivery to `thps1996@gmail.com`.
- [ ] **Career Upload Test**: Submit sample application on `/careers` with a test PDF file and confirm attachment validation.
- [ ] **Google Maps Embed**: Confirm map renders smoothly without API key warnings or CSP errors.
- [ ] **SEO Verification**: Test canonical domain in Google Rich Results Test to validate JSON-LD `EducationalOrganization` schema.
- [ ] **Phone & Email Links**: Click mobile `tel:+919235445595` and `mailto:thps1996@gmail.com` triggers to verify native app launches.
- [ ] **Core Web Vitals**: Run Lighthouse check to confirm performance score >= 90 and accessibility score >= 95.

---

## Related Documents

- [PROJECT_BIBLE.md](file:///c:/Users/VIHAN/Desktop/school/project/PROJECT_BIBLE.md) – Master Project Bible
- [SEO.md](file:///c:/Users/VIHAN/Desktop/school/project/SEO.md) – SEO & Analytics Strategy
- [TASKS.md](file:///c:/Users/VIHAN/Desktop/school/project/TASKS.md) – Phased Task List
- [PLACEHOLDERS.md](file:///c:/Users/VIHAN/Desktop/school/project/PLACEHOLDERS.md) – Environment Credentials Log
