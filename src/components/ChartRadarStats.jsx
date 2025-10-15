import React, { useMemo } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { capitalizeFirstLetter } from "../utils/utilFunctions";

const ChartRadarStats = ({ pokemonData = [] }) => {
  const radarData = useMemo(() => {
    const subjects = [
      "HP",
      "Attack",
      "Defense",
      "Spl. Atk",
      "Spl. Def",
      "Speed",
    ];

    return subjects.reduce((acc, subject) => {
      const point = pokemonData.reduce((obj, pokemon) => {
        const stats = {
          HP: pokemon.stats[0].base_stat,
          Attack: pokemon.stats[1].base_stat,
          Defense: pokemon.stats[2].base_stat,
          "Spl. Atk": pokemon.stats[3].base_stat,
          "Spl. Def": pokemon.stats[4].base_stat,
          Speed: pokemon.stats[5].base_stat,
        };
        obj.subject = subject;
        obj[pokemon.name] = stats[subject];
        return obj;
      }, {});

      acc.push(point);
      return acc;
    }, []);
  }, [pokemonData]);

  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7300",
    "#8dd1e1",
    "#d084d0",
  ];

  return (
    <div className="chart-card">
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Tooltip />
          <Legend />
          {pokemonData.map((pokemon, index) => (
            <Radar
              key={pokemon.name}
              name={capitalizeFirstLetter(pokemon.name)}
              dataKey={pokemon.name}
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              fillOpacity={0.3}
            />
          ))}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartRadarStats;
