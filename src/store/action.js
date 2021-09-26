import axios from "axios";
import { GET_POKEMON, GET_POKEMON_DETAIL, ERROR_MESSAGE } from "./actionType";

const baseUrl = "https://pokeapi.co/api/v2";

export function getPokemon(payload) {
  const actionGetPokemon = {
    type: GET_POKEMON,
    payload,
  };

  return actionGetPokemon;
}

export function getPokemonDetail(payload) {
  const actionGetPokemonDetail = {
    type: GET_POKEMON_DETAIL,
    payload,
  };

  return actionGetPokemonDetail;
}

export function errorHandler(payload) {
  const actionErrorHandler = {
    type: ERROR_MESSAGE,
    payload,
  };

  return actionErrorHandler;
}

export function fetchPokemon() {
  return async function (dispatch) {
    let pokemonData = [];
    const urlPokedex = `${baseUrl}/pokedex/2`;
    const responsePokedex = await axios.get(urlPokedex);

    for (let i = 0; i < responsePokedex.data.pokemon_entries.length; i++) {
      const pokemon = responsePokedex.data.pokemon_entries[i];
      const entryNumber = pokemon.entry_number;

      const urlDetail = `${baseUrl}/pokemon/${entryNumber}`;
      const { data } = await axios.get(urlDetail);
      const pokemonDetails = data;
      let types = [];

      pokemonDetails.types.forEach((type) => {
        types.push(type.type.name);
      });

      const pokemonInfo = {
        index: pokemon.entry_number,
        name: pokemon.pokemon_species.name,
        sprites: pokemonDetails.sprites.other["official-artwork"].front_default,
        types,
      };

      pokemonData.push(pokemonInfo);
    }

    if (!pokemonData) {
      dispatch(
        errorHandler("Something went wrong while trying to get the Pokemon 😟")
      );
    } else {
      dispatch(getPokemon(pokemonData));
    }
  };
}

export function fetchPokemonDetail(index) {
  return async function (dispatch) {
    const urlDetail = `${baseUrl}/pokemon/${index}`;

    const { data } = await axios.get(urlDetail);

    const abilitiesList = [];
    console.log(data.abilities, "abilities");
    data.abilities.forEach((element) => {
      abilitiesList.push(element.ability.name);
    });

    const stats = {};

    data.stats.forEach((stat) => {
      stats[stat.stat.name] = stat.base_stat;
    });

    const pokemonDetail = {
      index: data.id,
      name: data.name,
      sprites: data.sprites.other["official-artwork"].front_default,
      abilities: abilitiesList,
      height: data.height,
      weight: data.weight,
      stats,
    };

    if (!data) {
      dispatch(
        errorHandler("Something went wrong while trying to get the Pokemon 😟")
      );
    } else {
      dispatch(getPokemonDetail(pokemonDetail));
    }
  };
}
