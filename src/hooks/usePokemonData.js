import { useQuery } from "@tanstack/react-query";
import { getPokemonData } from "../utils/apiCalls";

export const usePokemonData = (noOfPokemon) => {
  const {
    data: pokemonData,
    isLoading: pokemonDataLoading,
    isError: pokemonFetchError,
  } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: () => getPokemonData(noOfPokemon),
    staleTime: 5 * 60 * 1000,
  });

  return { pokemonData, pokemonDataLoading, pokemonFetchError };
};
