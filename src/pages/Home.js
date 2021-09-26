import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemon } from "../store/action";

function Home() {
  const dispatch = useDispatch();
  const { pokemonList } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return (
    <div className="container d-flex flex-column vw-100">
      <div className="row mb-2 mt-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          className="card-img-top mb-3"
          alt=""
          style={{ height: "150px" }}
        />
        <h2 className="text-center fw-bold">
          Browse through Generation 1 Pokédex!
        </h2>
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
