import React from "react";
import styles from "./Filters.module.css";
import { usePokemonTypes } from "../hooks/usePokemonTypes";

const Filters = ({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  resultCount,
}) => {
  const { pokemonTypes, pokemonTypesLoading, pokemonTypesFetchError } =
    usePokemonTypes();

  if (pokemonTypesLoading) {
    return <p>Loading Pokémon Types...</p>;
  }

  if (pokemonTypesFetchError) {
    return <p>Error loading data</p>;
  }
  return (
    <div className={styles.filters}>
      <div className={styles.filterGroup}>
        <label>Search Pokémon (min 2 chars):</label>
        <input
          type="text"
          placeholder="e.g., pikachu, char, water"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
        {searchQuery && searchQuery.length < 2 && (
          <span className={styles.searchHint}>Type at least 2 characters</span>
        )}
      </div>
      <div className={styles.filterGroup}>
        <label>Filter by Type:</label>
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className={styles.typeSelect}
        >
          {pokemonTypes?.map((type) => (
            <option key={type} value={type}>
              {type === "all"
                ? "All Types"
                : type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.resultsCount}>{resultCount} Pokémon found</div>
    </div>
  );
};

export default Filters;
