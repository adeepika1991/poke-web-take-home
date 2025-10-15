import React from "react";
import styles from "./Dashboard.module.css";

const ChartEmptyState = ({ searchQuery }) => {
  return (
    <div className={styles.emptyState}>
      <h3>No Pokémon Found</h3>
      <p>No Pokémon match "{searchQuery}"</p>
      <div className={styles.suggestions}>
        <p>Try searching for:</p>
        <ul>
          <li>Pokémon names: "pikachu", "charizard", "eevee"</li>
          <li>Partial names: "char", "saur", "chu"</li>
          <li>Or clear your search to see all Pokémon</li>
        </ul>
      </div>
    </div>
  );
};

export default ChartEmptyState;
