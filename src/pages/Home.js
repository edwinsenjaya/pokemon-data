import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemon } from "../store/action";
// import debounce from "lodash.debounce";

function Home() {
  const dispatch = useDispatch();
  const { pokemonList } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  //   const searchData = useMemo(() => {
  //     return debounce((query) => {
  //       dispatch(fetchSearch(query));
  //     }, 2000);
  //   }, []);

  //   const onQueryChange = useCallback((q) => {
  //     searchData(q);
  //   }, []);

  return (
    <div className="container d-flex flex-column vw-100">
      <div className="row mb-2 mt-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          className="card-img-top mb-3"
          alt=""
          style={{ height: "150px" }}
        />
        <p className="fs-5 text-center fw-bold">
          Browse through Generation 1 Pokédex!
        </p>
        {/* <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="example"
          />
          <label className="ms-4">Search Pokémon here!</label>
        </div> */}
      </div>
      <div className="row">
        <div className="col-12 text-dark">
          <div className="row row-cols-1 row-cols-md-4 g-4 mb-3">
            <PokemonCard pokemonList={pokemonList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
