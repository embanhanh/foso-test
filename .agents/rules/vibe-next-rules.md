---
trigger: always_on
---

# AI Coding Rules: High-Conversion Service Landing Page (Next.js 16)

## 🎯 Project Context & Tech Stack (Mock-Ready & Scalable to Real API)

- **System**: High-Performance Service Landing Page (Lead Gen & Branding).
- **Framework**: Next.js 16 (App Router) - **Async-First & PPR Ready**.
- **Styling**: Tailwind CSS & Shadcn UI (Modern, minimalist design).
- **Data Strategy**: **Interface-Driven Development**. Use Mock Services by default, switch to Real API via Environment Variables.
- **Performance Focus**: 100/100 Core Web Vitals (LCP < 1.2s, Zero CLS).
- **Tech Stack**: Tailwind CSS, Shadcn UI, Zod, Lucide Icons.

---

## 🏗️ 1. Next.js 16 & Server-First Mastery

- **Async APIs**: In Next.js 16, always `await` `params`, `searchParams`, `cookies()`, and `headers()` before accessing properties.
- **Partial Prerendering (PPR)**: Default to Static rendering for Hero/Content. Use `Suspense` with Skeletons for any segment fetching data (even mock data).
- **Constraint**: Use `'use client'` ONLY for:
  - Framer Motion animations / Scroll observers.
  - Form state handling (Client-side validation).
  - Interactive UI components (Modals, Tabs).
- **Zero CLS Strategy**:
  - Every dynamic component MUST have a pre-defined **Skeleton** fallback.
  - Use `aspect-ratio` for all images to reserve space during load.

---

## 🔌 2. Mock-to-Real Service Pattern (CRITICAL)

- **Service Layer**: NO direct fetching in Components. All data logic stays in `@/services`.
- **Interface First**: Define a TypeScript `interface` for every service (e.g., `IService`).
- **Mock Implementation**:
  - Store mock data in `@/data/mocks/*.ts`.
  - Use a `delay()` utility to simulate network latency (e.g., 800ms-1500ms) to validate `Suspense` and Loading states.
- **Switching Logic**:
  - Use an Env Var: `NEXT_PUBLIC_API_MODE=mock` or `real`.
  - Export a `ServiceFactory` or a conditional export to switch between `MockService` and `ApiService`.
- **Goal**: Switching from Mock to Real API should only require changing an Env Var and updating the `ApiService` implementation.

---

## 🛡️ 3. Type Safety & Schema Validation

- **Contracts**: Types/Interfaces are the "Single Source of Truth".
- **Strict Typing**: No `any`. Use `Readonly<T>` for mock data arrays.
- **Zod-Powered**: Even with Mock Data, use **Zod** to parse responses. This ensures that when the Real API goes live, any schema mismatch is caught instantly.
- **Shared Schemas**: Define schemas in `@/lib/validations` to be reused by both Client Forms and Server Actions.

---

## 📈 4. SEO & Growth Engineering

- **Metadata**: Every page must implement `generateMetadata` (Static or Dynamic).
- **Structured Data**: Implement **JSON-LD (Schema.org)** for Service, FAQ, and Reviews to boost Google rich snippets.
- **Performance**:
  - Hero images must use `priority` and `placeholder="blur"`.
  - All icons must be wrapped in a fixed-size container to prevent layout shifts.

---

## 🧹 5. Vibe Coding Architecture

- **Modular Components**: Max **150 lines** per file. If larger, extract sub-components into a `components/` folder local to the route or `@/components/shared`.
  **Separation of Concerns**:
  - **Components**: UI Only.
  - **Services**: Data Fetching (Mock/Real).
  - **Actions**: Server-side mutations (Form submissions).
- **Consistent Returns**: All Services/Actions return `{ success: boolean, data?: T, error?: string }`.

---

## 🧹 6. Clean Code & UX for Mutations

- **Early Returns**: Flatten logic. No nested `if/else`.
- **Form Handling**: Use `useActionState` for lead forms.
- **Feedback**: Every mutation must have a Loading state (Spinner/Skeleton) and a Toast notification for Success/Error.
- **Error Boundaries**: Use `error.tsx` to catch and display graceful fallbacks for service failures.

---

## 🛠️ 7. Git & Development Flow

- **Commits**: Conventional Commits (e.g., `feat(service): implement mock fetch for pricing`).
- **Styling**: Strict use of `cn()` for dynamic Tailwind classes.
- **Security**: Implement a "Honeypot" field in all lead forms to prevent bot spam, even in mock mode.

---

> **Note to AI**: You are a Senior Tech Lead. When asked to fetch data, ALWAYS check `@/services` first. If a service doesn't exist, create an interface and a **Mock implementation with a simulated delay**. DO NOT hardcode data inside components.
