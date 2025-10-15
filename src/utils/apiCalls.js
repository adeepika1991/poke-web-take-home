import { pokemonApi } from "./url";
import axios from "axios";

export const getPokemonData = async (noOfPokemon) => {
  const url = pokemonApi.baseURL.replace(":noOfPokemon", noOfPokemon);
  const response = await axios.get(url);

  const pokemonDetails = await Promise.all(
    response?.data?.results.map(async (pokemon) => {
      const { data: detailData } = await axios.get(pokemon.url);
      return {
        id: detailData.id,
        name: detailData.name,
        types: detailData.types,
        stats: detailData.stats,
        height: detailData.height,
        weight: detailData.weight,
      };
    })
  );

  return pokemonDetails;
};
