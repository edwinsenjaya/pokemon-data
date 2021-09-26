import { GET_POKEMON, GET_POKEMON_DETAIL, ERROR_MESSAGE } from "./actionType";

const initialState = {
  pokemonList: [],
  pokemonDetail: {},
  errorMessage: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemonList: action.payload,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
