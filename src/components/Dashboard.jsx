import React, { useState } from "react";
import { usePokemonData } from "../hooks/usePokemonData";
import "../App.css";
import styles from "./Dashboard.module.css";
import useDebounce from "../hooks/useDebounce";
import Filters from "./Filters";

// Search query
// Pass to Filter

const Dashboard = () => {
  const { pokemonData, pokemonDataLoading, pokemonFetchError } =
    usePokemonData(150);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  if (pokemonDataLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Pokémon data...</p>
      </div>
    );
  }

  if (pokemonFetchError) {
    return (
      <div className="error-container">
        <h2>Error loading data</h2>
        <p>{error.message}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }
  return (
    <div className={styles.dashboard}>
      <header className={styles.dashboardHeader}>
        <h1>Pokémon Performance Analytics</h1>
        <p>Analyze battle stats and type distributions</p>
      </header>
      <Filters searchQuery={searchQuery} onSearchChange={setSearchQuery} />
    </div>
  );
};

export default Dashboard;
