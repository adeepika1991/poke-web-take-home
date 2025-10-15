import { useQuery } from "@tanstack/react-query";
import { getPokemonTypes } from "../utils/apiCalls";

export const usePokemonTypes = () => {
  const {
    data: pokemonTypes,
    isLoading: pokemonTypesLoading,
    isError: pokemonTypesFetchError,
  } = useQuery({
    queryKey: ["pokemonTypes"],
    queryFn: getPokemonTypes,
    staleTime: 5 * 60 * 1000,
  });

  return { pokemonTypes, pokemonTypesLoading, pokemonTypesFetchError };
};
