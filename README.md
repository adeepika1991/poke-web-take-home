# Pokémon Analytics Dashboard

Interactive analytics dashboard for Pokémon data visualization.  
Explore battle stats, type distributions, and gain insights for team building or competitive analysis.

**Live Demo:** [https://poke-web-take-home.vercel.app/](https://poke-web-take-home.vercel.app/)

---

## Getting Started

### Prerequisites

- **Node.js v20 or above**

### Installation & Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at http://localhost:5173 (or the port specified by Vite).

---

## Technology Choices

**Recharts:**  
Chosen for data visualization because I am more comfortable with it from previous projects. It provides easy-to-use, responsive, and customizable charts.

**Tanstack Query:**  
Handles caching of API data to reduce redundant server calls. Ensures smooth user experience and minimizes unnecessary network requests.

**CSS Modules:**  
Used for scoped, maintainable styling without cluttering component code. Avoided Tailwind CSS or CSS-in-JS for simplicity and clarity.

---

## Features Implemented

- Pokémon type distribution chart
- Radar chart for individual Pokémon stats
- Dynamic chart selection based on the number of Pokémon results
- Data fetching with caching via Tanstack Query
- Responsive layout with module.css

---

## What I'd Improve With More Time

**Secondary Charts:**  
Currently, only the primary chart renders (radar or scatter depending on number of results).  
With more time, I would implement secondary charts (e.g., histograms, comparative charts) for a more comprehensive analysis.

**Enhanced Interactivity:**

- Multi-level filtering
- Click-on details: clicking on a type would open a modal showing all Pokémon associated with that type.
- Drill-down insights for better decision-making

**Additional Visual Enhancements:**

- Comparison charts for selected Pokémon against the rest
- More advanced chart interactivity (hover details, animated transitions)

---

## Assumptions & Trade-offs

- This project is not just a fetch → transform → display assignment.  
  I assumed the main goal is to meaningfully represent the data for users to make decisions about Pokémon selection or battles.

- Explicitly used Recharts since it was allowed and familiar to me. The pre-installed chart library was removed.

- Did not use a global state management library because Tanstack Query already handles API state efficiently.

- CSS Modules were chosen for simplicity and maintainability instead of Tailwind or CSS-in-JS. This keeps component code clean while still allowing scoped styling.
