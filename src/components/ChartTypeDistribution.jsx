import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartTypeDistribution = ({ pokemonData = [] }) => {
  const typeData = useMemo(() => {
    return Object.entries(
      pokemonData.reduce((acc, pokemon) => {
        pokemon.types.forEach((t) => {
          const name = t.type.name;
          acc[name] = (acc[name] || 0) + 1;
        });
        return acc;
      }, {})
    ).map(([type, count]) => ({ type, count }));
  }, [pokemonData]);

  return (
    <div className="chart-card">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={typeData}>
          <XAxis dataKey="type" angle={-45} textAnchor="end" height={80} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTypeDistribution;
