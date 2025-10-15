import React from "react";
import { usePokemonData } from "../hooks/usePokemonData";
import "../App.css";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const { pokemonData, pokemonDataLoading, pokemonFetchError } =
    usePokemonData(30);

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
    </div>
  );
};

export default Dashboard;
