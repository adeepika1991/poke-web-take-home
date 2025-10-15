import React, { useState, useMemo } from "react";
import { usePokemonData } from "../hooks/usePokemonData";
import "../App.css";
import styles from "./Dashboard.module.css";
import useDebounce from "../hooks/useDebounce";
import Filters from "./Filters";
import ChartTypeDistribution from "./ChartTypeDistribution";

// Search query
// Pass to Filter
// Add Type filter
// Check if we get the right data based on the Filter + Search combo
// Type distribution bar chart (based the selected types, the pokemon with other types will be represented)

const Dashboard = () => {
  const { pokemonData, pokemonDataLoading, pokemonFetchError } =
    usePokemonData(150);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const filteredData = useMemo(() => {
    if (!pokemonData) return [];

    let filtered = pokemonData;

    // Filter by search
    if (debouncedSearchQuery && debouncedSearchQuery.length >= 2) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
    }

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.some((t) => t.type.name === selectedType)
      );
    }

    return filtered;
  }, [pokemonData, selectedType, debouncedSearchQuery]);

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
      <Filters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        resultCount={filteredData.length}
      />
      <div className="charts-container">
        {/* Fixed Bar Chart - Always shows type distribution */}
        <div className="chart-section">
          <h3>Type Distribution in Current Selection</h3>
          <ChartTypeDistribution pokemonData={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
