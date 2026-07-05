# ATOMITY Frontend Engineering Challenge

## Live Demo
https://atomity-dashboard-brown.vercel.app/

## GitHub Repository
https://github.com/navs04/atomity-dashboard
---

## Feature Chosen

I chose **Option A (0:30–0:40)** because it combines data visualization, interaction, and animation in a single component. I wanted to recreate the idea of switching between cloud clusters while presenting their metrics in an engaging and responsive dashboard.

Rather than creating a pixel-perfect copy of the reference, I focused on building a reusable dashboard with dynamic data, smooth transitions, and a clean component architecture.

---

## Approach to Animation

Animations were implemented using **Framer Motion** to make interactions feel smooth and intentional.

Implemented animations include:

- Scroll-triggered entrance animation for the dashboard section
- Animated bar growth whenever the selected cluster changes
- Hover and tap feedback for cluster selection buttons
- Animated appearance of table rows
- Smooth transitions designed to avoid excessive motion

---

## Tokens & Styling

The project uses **CSS Modules** for component-level styling and **CSS variables (design tokens)** for reusable values such as colors, spacing, border radius, and shadows.

This approach keeps styles consistent across components while making future design changes easier without modifying multiple files.

I also used modern CSS features including:

- `clamp()` for fluid spacing
- CSS variables for theming
- Responsive layouts using media queries

---

## Data Fetching & Caching

Dashboard data is fetched from the **DummyJSON API** using **TanStack Query (React Query)**.

The API data is transformed into dashboard metrics by grouping products into different "clusters," allowing each cluster selection to display different chart values and table data.

React Query provides:

- Cached API responses
- Reduced unnecessary network requests
- Loading state
- Error state
- Configurable stale time

This keeps the UI responsive while satisfying the caching requirement.

---

## Libraries Used

### React
Component-based UI development.

### TypeScript
Improved type safety and developer experience.

### Framer Motion
Smooth, declarative animations for UI interactions.

### TanStack Query
Data fetching, caching, and asynchronous state management.

### CSS Modules
Scoped component styling without global class conflicts.

---

## Trade-offs & Decisions

Given the time limit, I focused on implementing one polished interactive section rather than a larger dashboard.

Since a public cloud metrics API was not available, I used DummyJSON data and mapped it into dashboard metrics while preserving dynamic fetching and caching behavior.

The emphasis was on clean architecture, reusable components, and smooth user interactions rather than reproducing the reference exactly.

---

## Improvements With More Time

If I had more time, I would add:

- Dark mode using the existing token system
- Interactive tooltips on chart bars
- More advanced chart animations
- Better accessibility with additional keyboard interactions
- Container queries for more granular responsiveness
- Real cloud infrastructure metrics from an appropriate API
- Filtering and time-range selection for cluster analytics

---

## Project Structure

```
src/
├── components/
├── hooks/
├── data/
├── styles/
├── types/
└── App.tsx
```

---

## Running Locally

```bash
npm install
npm run dev
```
