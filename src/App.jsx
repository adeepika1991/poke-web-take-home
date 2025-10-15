import React from "react";
import Dashboard from "./components/Dashboard";

// Add Search bar (with debounce)
// Add Type filter
// Type distribution bar chart (To find combination and pairing teams)
// Radar Chart (for individual analysis)
// Scatter chart if there are more results

// IF time permits, individual pokemon against all the pokemons average power in a Bar chart

const App = () => {
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
};

export default App;
