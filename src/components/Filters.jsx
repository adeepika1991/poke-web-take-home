import React from "react";
import styles from "./Filters.module.css";

const Filters = ({ searchQuery, setSearchQuery, onSearchChange }) => {
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
    </div>
  );
};

export default Filters;
