import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { capitalizeFirstLetter } from "../utils/utilFunctions";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ fontWeight: "bold", margin: "0 0 5px 0" }}>
          {capitalizeFirstLetter(data.name)}
        </p>
        <p style={{ margin: "2px 0", color: "#8884d8" }}>
          Attack: {data.attack}
        </p>
        <p style={{ margin: "2px 0", color: "#82ca9d" }}>
          Defense: {data.defense}
        </p>
        <p style={{ margin: "2px 0", color: "#ffc658" }}>Speed: {data.speed}</p>
        <p style={{ margin: "2px 0", color: "#ff7300" }}>Type: {data.type}</p>
      </div>
    );
  }
  return null;
};

const ChartScatterPlot = ({ pokemonData = [] }) => {
  const transformedData = pokemonData.map((pokemon) => ({
    name: pokemon.name,
    attack: pokemon.stats[1].base_stat,
    defense: pokemon.stats[2].base_stat,
    speed: pokemon.stats[5].base_stat,
    type: pokemon.types[0].type.name,
  }));

  return (
    <div className="chart-card">
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart data={transformedData}>
          <CartesianGrid />
          <XAxis type="number" dataKey="attack" name="Attack" />
          <YAxis type="number" dataKey="defense" name="Defense" />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ strokeDasharray: "3 3" }}
          />
          <Legend />
          <Scatter name="Pokémon" data={transformedData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
      <p className="chart-description">
        Attack vs Defense - Higher values indicate stronger battle roles
      </p>
    </div>
  );
};

export default ChartScatterPlot;
